import { ReactElement } from 'react'
import ReactCookieBanner from 'react-cookie-banner'

export default function CookieBanner(): ReactElement {
    return (
        <div>
            <ReactCookieBanner
                message="Hello, we use cookies. If you continue browsing it means that you accept the use of cookies."
                buttonMessage="Ok"
                cookie="user-has-accepted-cookies"
                styles={{ message: { lineHeight: 1.5 } }}
                dismissOnScroll
                dismissOnClick
            />
        </div>
    )
}