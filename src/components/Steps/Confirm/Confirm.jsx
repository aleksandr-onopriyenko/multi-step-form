import thanksIcon from '@/assets/images/icon-thank-you.svg'

import {
  ConfirmText,
  ConfirmTitle,
  ConfirmWrapper,
  ConfirmDescription,
  ConfirmImageWrapper,
} from './style'

export const Confirm = () => {
  return (
    <ConfirmWrapper>
      <ConfirmImageWrapper>
        <img src={thanksIcon} alt="confirm icon" />
      </ConfirmImageWrapper>
      <ConfirmText>
        <ConfirmTitle>Thank you!</ConfirmTitle>
        <ConfirmDescription>
          Thanks for confirming your subscription! We hope you have fun using our platform. If you
          ever need support, please feel free to email us at support@loremgaming.com.
        </ConfirmDescription>
      </ConfirmText>
    </ConfirmWrapper>
  )
}
