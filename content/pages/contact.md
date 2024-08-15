---
type: PageLayout
title: Contact
sections:
  - type: GenericSection
    title:
      type: TitleBlock
      text: Contact our Sales and Customer representative
      color: text-dark
    subtitle: We are waiting for you
    text: ''
    actions: []
    media:
      type: FormBlock
      fields:
        - type: TextFormControl
          name: name
          label: Name
          hideLabel: true
          placeholder: Your name
          isRequired: true
          width: full
        - type: EmailFormControl
          name: email
          label: Email
          hideLabel: true
          placeholder: Your email
          isRequired: true
          width: full
        - type: TextareaFormControl
          name: message
          label: Message
          hideLabel: true
          placeholder: Your message
          width: full
        - type: CheckboxFormControl
          name: Consent
          label: I have read and accept the legal terms.
          isRequired: false
          width: full
        - type: SelectFormControl
          name: State
          label: State
          hideLabel: false
          defaultValue: Please choose...
          options:
            - Alabama
            - Alaska
            - Arizona
            - Arkansas
            - California
            - Colorado
            - Connecticut
            - Delaware
            - District Of Columbia
            - Florida
            - Georgia
            - Hawaii
            - Idaho
            - Illinois
            - Indiana
            - Iowa
            - Kansas
            - Kentucky
            - Louisiana
            - Maine
            - Maryland
            - Massachusetts
          isRequired: false
          width: full
      submitButton:
        type: SubmitButtonFormControl
        label: Submit
        icon: arrowRight
        iconPosition: right
        style: primary
      elementId: contact-form
      styles:
        self:
          padding:
            - pt-6
            - pb-6
            - pl-6
            - pr-6
          borderColor: border-dark
          borderStyle: solid
          borderWidth: 1
          borderRadius: large
    badge:
      type: Badge
      label: ''
      color: text-primary
    colors: bg-neutral-fg-dark
    elementId: ''
    styles:
      text:
        textAlign: center
  - type: DividerSection
    title: Divider
    elementId: ''
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-12
          - pl-12
          - pb-12
          - pr-12
  - type: GenericSection
    title:
      type: TitleBlock
      text: ''
      color: text-dark
    subtitle: ''
    text: ''
    actions:
      - type: Button
        label: SCHEDULE AN APPOINTMENT
        altText: ''
        url: 'https://calendly.com/ram-baswa/american-med-robotics'
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: ''
    media:
      type: ImageBlock
      url: /images/calendly.jpg
      altText: Fun feature preview
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
slug: Contact
isDraft: false
seo:
  type: Seo
  metaTitle: Landing Page
  metaDescription: Write here your new page's description including most relevant keywords.
  addTitleSuffix: true
  socialImage: /images/main-hero.jpg
  metaTags: []
---
