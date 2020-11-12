import {Fragment, h} from 'preact'
import {connect} from '../../../libs/unistore/preact'
import actions from '../../../actions'
import printAda from '../../../helpers/printAda'
import {Lovelace} from '../../../state'
import {LinkIconToPool} from './common'
import {EpochDateTime} from '../common'

const CurrentDelegationPage = ({
  pool,
  revokeDelegation,
  delegationValidationError,
  calculatingDelegationFee,
  nearestReward,
  currentDelegationReward,
}) => {
  return (
    <div className="current-delegation card">
      <h2 className="card-title small-margin">Current Delegation</h2>
      {Object.keys(pool).length ? (
        <div>
          <div className="current-delegation-wrapper">
            <div className="current-delegation-name">
              {pool.name || 'Pool'}
              <LinkIconToPool poolHash={pool.poolHash} />
            </div>
            <div className="current-delegation-id">{pool.poolHash}</div>
            <div className="current-delegation-id">Ticker: {pool.ticker || ''}</div>
            <div className="current-delegation-id">Tax: {pool.margin * 100 || ''}%</div>
            <div className="current-delegation-id">
              Fixed cost: {printAda(parseInt(pool.fixedCost, 10) as Lovelace)}
            </div>
            <div className="current-delegation-id">
              {'Homepage: '}
              <a href={pool.homepage}>{pool.homepage}</a>
            </div>
            <div className="current-delegation-id">
              {'View on '}
              <a
                className="transaction-address"
                href={`https://cardanoscan.io/pool/${pool.poolHash}`}
              >
                CardanoScan
              </a>
              <span> | </span>
              <a
                className="transaction-address"
                href={`https://adastat.net/pools/${pool.poolHash}`}
              >
                AdaStat
              </a>
            </div>
            <div className="current-delegation-id">
              Next reward:{' '}
              <EpochDateTime
                epoch={currentDelegationReward.distributionEpoch}
                dateTime={new Date(currentDelegationReward.rewardDate)}
              />
            </div>
          </div>
          {/* <button
            className="button primary revokedelegation-delegation"
            onClick={revokeDelegation}
            disabled={delegationValidationError || calculatingDelegationFee}
          >
            Revoke current delegation
          </button> */}
        </div>
      ) : (
        <p>The funds are currently undelegated. Delegate now.</p>
      )}
      {nearestReward &&
        nearestReward.distributionEpoch !== currentDelegationReward.distributionEpoch && (
        <Fragment>
          <h2 className="card-title margin-top small-margin">Reward from previous pool</h2>
          <div className="current-delegation-wrapper">
            <div className="current-delegation-name">
              <span className="bold">{nearestReward.pool.name}</span>
              <LinkIconToPool poolHash={nearestReward.poolHash} />
            </div>
            <div className="current-delegation-id">{nearestReward.poolHash}</div>
            <div className="current-delegation-id">
                Next reward:{' '}
              <EpochDateTime
                epoch={nearestReward.distributionEpoch}
                dateTime={new Date(nearestReward.rewardDate)}
              />
            </div>
          </div>
        </Fragment>
      )}
    </div>
  )
}

export default connect(
  (state) => ({
    pool: state.shelleyAccountInfo.delegation,
    delegationValidationError: state.delegationValidationError,
    calculatingDelegationFee: state.calculatingDelegationFee,
    nearestReward: state.shelleyAccountInfo.rewardDetails.nearest,
    currentDelegationReward: state.shelleyAccountInfo.rewardDetails.currentDelegation,
  }),
  actions
)(CurrentDelegationPage)
