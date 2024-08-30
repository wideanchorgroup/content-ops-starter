---
type: PageLayout
title: About Us
sections:
  - type: GenericSection
    title:
      type: TitleBlock
      text: A team that works closely together
      color: text-dark
      styles:
        self:
          textAlign: center
    subtitle: ABOUT US
    text: >
      At American Med Robotics, we provide next-generation solutions that go
      beyond just robots. Our offerings are tailored to meet the unique needs of
      your hospital, including software solutions, area mapping, and advanced AI
      technology. We pride ourselves on delivering excellent customer service,
      expert technicians, and personalized care. When you choose us, you're
      selecting our dedicated team, our expertise, and our cutting-edge
      technology—all within a system designed specifically for you by a trusted
      partner committed to your success.
    actions:
      - type: Button
        label: See open positions
        url: /
        icon: arrowRight
        iconPosition: right
        style: primary
    colors: bg-neutral-fg-dark
    backgroundImage:
      type: BackgroundImage
      url: /images/abstract-background.svg
      altText: Placeholder image
      backgroundSize: cover
      backgroundPosition: center
      backgroundRepeat: no-repeat
      opacity: 100
    styles:
      self:
        padding:
          - pt-40
          - pl-4
          - pb-40
          - pr-4
        alignItems: center
        flexDirection: row-reverse
        justifyContent: center
      text:
        textAlign: center
      subtitle:
        textAlign: center
  - type: FeaturedPeopleSection
    title:
      type: TitleBlock
      text: Meet the team
      color: text-dark
      styles:
        self:
          textAlign: center
    people:
      - content/data/person1.json
      - content/data/person2.json
      - content/data/person3.json
      - content/data/person4.json
      - content/data/person5.json
      - content/data/person6.json
    actions: []
    variant: three-col-grid
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16
        justifyContent: center
      subtitle:
        textAlign: center
  - type: CarouselSection
    subtitle: Testimonials
    items:
      - type: FeaturedItem
        title: '"Empowering Healthcare with Transport Robotics"'
        tagline: Outstanding service and team
        subtitle: 'Dr. Emily Warren, Chief Operating Officer, Green Valley Hospital'
        text: >
          We partnered with American Med Robotics for our hospital's robotic
          needs, and they've exceeded our expectations. Their tailored solutions
          and advanced AI technology have streamlined our operations, allowing
          our staff to focus more on patient care. Their customer service and
          technical support are top-notch. We couldn't ask for a better partner.
        image:
          type: ImageBlock
          altText: Maria Walters
          styles:
            self:
              borderRadius: full
        actions: []
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-9
              - pb-9
              - pl-9
              - pr-9
            textAlign: left
            borderRadius: large
            flexDirection: row
            justifyContent: center
      - type: FeaturedItem
        title: Exceptional Service and Cutting-Edge Technology!
        tagline: Great Service
        subtitle: 'Johnathan Smith, Director of Operations, Blue Ridge Medical Center'
        text: >
          American Med Robotics transformed our hospital's operations. Their
          customized solutions, from AI-driven software to advanced robotics,
          have streamlined our processes and improved patient care. Their team's
          dedication and expertise are unmatched!
        image:
          type: ImageBlock
          altText: Jane Doe
          styles:
            self:
              borderRadius: full
        actions: []
        colors: bg-dark-fg-light
        styles:
          self:
            padding:
              - pt-9
              - pb-9
              - pl-9
              - pr-9
            textAlign: left
            borderRadius: large
            flexDirection: row
            justifyContent: center
      - type: FeaturedItem
        title: Easy Food delivery
        tagline: We saved average of 10000 steps a day
        subtitle: 'Mark Daniels, Facility Manager, Starlight Health Network'
        text: >
          From the initial consultation to the final implementation, American
          Med Robotics demonstrated a commitment to meeting our specific needs.
          Their innovative solutions and personal approach have made a
          significant impact on our hospital's Kitchen operations and food
          delivery. We are grateful for their partnership.
        image:
          type: ImageBlock
          altText: Placeholder text
          styles:
            self:
              borderRadius: x-large
        actions: []
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: row
    variant: next-prev-nav
    colors: bg-light-fg-dark
    styles:
      self:
        justifyContent: center
      subtitle:
        textAlign: center
  - type: PricingSection
    title:
      type: TitleBlock
      text: Our differentiators
      color: text-dark
      styles:
        self:
          textAlign: center
    subtitle: >-
      We do more than supply robots, we build an an automation eco-system to
      allow complex logistical movement, employee satisfaction, effective
      transitions
    plans:
      - type: PricingPlan
        title: Smooth Transition for
        price: Rapid Deployment
        details: Without disruptions to your operations
        description: >
          Our delivery robots are designed to seamlessly integrate into your
          existing operations with minimal disruption. We understand that
          operational continuity is crucial, which is why our robots are
          equipped with advanced technology that allows for rapid deployment
          without the need for extensive system overhauls. Whether you’re
          scaling up your delivery fleet or introducing automation for the first
          time, our robots ensure a smooth transition, enabling you to maintain
          productivity and efficiency during the integration process.
        features:
          - Plug-and-Play Setu
          - Minimal Operational Downtime
          - Flexible Integration
          - Scalable Solutions
          - Adaptive Technology
        image:
          type: ImageBlock
          url: /images/rocket.png
          altText: Pricing plan 1
        actions: []
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-6
              - pb-10
              - pl-6
              - pr-6
            borderRadius: large
      - type: PricingPlan
        title: Labor rules led
        price: Safety and Compliance
        details: for secure environment
        description: >
          At our company, we prioritize the safety and well-being of both your
          workforce and the environment in which our delivery robots operate.
          Our robots are designed and deployed with strict adherence to labor
          regulations, LiDAR sensors, Motion Cameras, Route mapping, LED safety
          standards, and compliance requirements. This ensures that your
          operations are not only efficient but also secure, promoting a healthy
          working environment that meets all legal and safety guidelines. Our
          commitment to compliance reduces the risk of accidents and ensures
          your operations are aligned with the latest industry standards.
        features:
          - Strict Adherence to FSLA
          - LED Safety Standards
          - Comprehensive Compliance
          - Secure Operations
          - Proactive Safety controls
        image:
          type: ImageBlock
          url: /images/safety.png
          altText: Pricing plan 2
        actions:
          - type: Button
            label: Try for free
            url: /
            icon: arrowRight
            iconPosition: right
            style: secondary
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-6
              - pb-10
              - pl-6
              - pr-6
            borderRadius: large
      - type: PricingPlan
        title: 24x7
        price: Customer support
        details: highly proficient staff
        description: >
          We understand that the smooth operation of your delivery robots is
          crucial to your business, which is why we offer round-the-clock
          customer support. Our dedicated team of highly proficient employees is
          available 24x7 to ensure that any issues or queries are addressed
          promptly and efficiently. With extensive training and deep industry
          knowledge, our support staff is equipped to handle any challenges that
          arise, providing you with peace of mind and ensuring that your
          operations continue without interruption.
        features:
          - 24x7 Availability
          - Highly Trained Experts
          - Rapid Response Times
          - Proactive Problem-Solving
          - Feature five
        image:
          type: ImageBlock
          url: /images/customersupport.png
          altText: Pricing plan 3
        actions:
          - type: Button
            label: Contact us
            url: /
            icon: arrowRight
            iconPosition: right
            style: secondary
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-6
              - pb-10
              - pl-6
              - pr-6
            borderRadius: large
      - type: PricingPlan
        title: Metric and data driven
        price: High SLAs
        details: for efficient operations
        description: >-
          Sed ut perspiciatis unde omnis, iste natus error sit voluptatem
          accusantium doloremque.
        features:
          - Feature one
          - Feature two
          - Feature three
          - Feature four
        image:
          type: ImageBlock
          url: /images/sla.png
          altText: Pricing plan 1
        actions:
          - type: Button
            label: Try for free
            url: /
            icon: arrowRight
            iconPosition: right
            style: secondary
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-6
              - pb-10
              - pl-6
              - pr-6
            borderRadius: large
      - type: PricingPlan
        title: Self service
        price: Onboarding concierge
        details: for easy learning
        description: >-
          Sed ut perspiciatis unde omnis, iste natus error sit voluptatem
          accusantium doloremque.
        features:
          - Feature one
          - Feature two
          - Feature three
          - Feature four
        image:
          type: ImageBlock
          url: /images/conceirge.png
          altText: Pricing plan 1
        actions:
          - type: Button
            label: Try for free
            url: /
            icon: arrowRight
            iconPosition: right
            style: secondary
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-6
              - pb-10
              - pl-6
              - pr-6
            borderRadius: large
      - type: PricingPlan
        title: Continuous improvement
        price: Highest quality
        details: across different needs
        description: >-
          Sed ut perspiciatis unde omnis, iste natus error sit voluptatem
          accusantium doloremque.
        features:
          - Feature one
          - Feature two
          - Feature three
          - Feature four
        image:
          type: ImageBlock
          url: /images/quality.png
          altText: Pricing plan 1
        actions:
          - type: Button
            label: Try for free
            url: /
            icon: arrowRight
            iconPosition: right
            style: secondary
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-6
              - pb-10
              - pl-6
              - pr-6
            borderRadius: large
    colors: bg-light-fg-dark
    styles:
      self:
        justifyContent: center
      subtitle:
        textAlign: center
slug: aboutus
seo:
  type: Seo
  metaTitle: Careers - Demo site
  metaDescription: This is the careers page built with Netlify.
  metaTags: []
---
