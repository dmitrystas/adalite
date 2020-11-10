import {h} from 'preact'
import {connect} from '../../../helpers/connect'
import actions from '../../../actions'

interface Props {
  closePremiumBanner: () => void
}

const PremiumBanner = ({closePremiumBanner}: Props) => {
  const premiumMessage = 'Get premium now.'
  return (
    <div className="banner premium">
      <div className="banner-text">{premiumMessage}</div>
      <button
        className="button close banner-close"
        {
        ...{ariaLabel: 'Close banner'} /* silence ts*/
        }
        onClick={(e) => {
          closePremiumBanner()
        }}
      />
    </div>
  )
}

export default connect(
  () => null,
  actions
)(PremiumBanner)
