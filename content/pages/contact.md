---
type: PageLayout
title: contact
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
        - type: TextFormControl
          name: Company or Hospital
          label: Company or Hospital name
          hideLabel: true
          placeholder: Company or Hospital Name
          isRequired: true
          width: full
        - type: TextFormControl
          name: Phone
          label: Phone
          hideLabel: true
          placeholder: Phone
          isRequired: true
          width: full
        - type: TextFormControl
          name: City
          label: City
          hideLabel: true
          placeholder: City
          isRequired: true
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
            - Michigan
            - Minnesota
            - Mississippi
            - Missouri
            - Montana
            - Nebraska
            - Nevada
            - New Hampshire
            - New Jersey
            - New Mexico
            - New York
            - North Carolina
            - North Dakota
            - Ohio
            - Oklahoma
            - Oregon
            - Pennsylvania
            - Rhode Island
            - South Carolina
            - South Dakota
            - Tennessee
            - Texas
            - Utah
            - Vermont
            - Virginia
            - Washington
            - West Virginia
            - Wisconsin
            - Wyoming
          isRequired: false
          width: full
        - type: TextareaFormControl
          name: Message
          label: Message
          hideLabel: true
          placeholder: Your message
          isRequired: false
          width: full
        - type: CheckboxFormControl
          name: Consent
          label: I agree to be contacted via email and phone
          isRequired: false
          width: full
      submitButton:
        type: SubmitButtonFormControl
        label: Submit
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: contactsubmit
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
          - pt-3
          - pl-3
          - pb-3
          - pr-3
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
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: secondary
        elementId: ''
    media:
      type: ImageBlock
      url: /images/calendly.jpg
      altText: Fun feature preview
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
slug: contact
isDraft: false
seo:
  type: Seo
  metaTitle: Contact
  metaDescription: Sales and Marketing at AmericanMedRobotics
  addTitleSuffix: true
  socialImage: /images/robot-sales.webp
  metaTags: []
---
