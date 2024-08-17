import React from "react"

export default function Home() {
    return <div>
        <form 
            name="contactv1"
            method="post" 
            data-netlify="true"
            onSubmit="submit"
            action="/success/"
            data-netlify-honeypot="bot-field"
        >
            <input type="hidden" name="form-name" value="contactv1" />
            <div hidden>
                <input name="bot-field" />
            </div>
            <div>
                <label>Full name
                    <input type="text" name="full-name" />
                </label>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" />
            </div>
            <div>
                <label>Comments</label>
                <textarea name="comments"></textarea>
            </div>
            <button type="submit">Reach us</button>
        </form>
    </div>
}