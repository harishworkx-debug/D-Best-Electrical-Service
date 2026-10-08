export const businessInfo = {
  name: 'D Best Electrical Service',
  address: '1102 Dayna Dr, College Park, GA 30349, United States',
  phoneDisplay: '470-414-6473',
  phoneLink: 'tel:4704146473',
  website: 'https://dbestelectricalservice.com/',
  googleMapsLink: 'https://maps.app.goo.gl/yvRf5kjx2muvp5Yw9',
  googleMapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.671635829515!2d-84.41949808868465!3d33.58787397322417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f4fc98a753df63%3A0x169586612bd7982d!2sD%20Best%20Electrical%20Service!5e0!3m2!1sen!2sin!4v1791357236134!5m2!1sen!2sin',
  city: 'College Park',
  state: 'Georgia',
  hours: 'Monday - Friday: 8:00 AM - 6:00 PM | Saturday: By Appointment | Sunday: Closed',
};

export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  heroAlt: string;
  overview: string;
  problems: { title: string; description: string }[];
  process: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  relatedServices: string[];
}

export const services: ServiceData[] = [
  {
    slug: 'electrical-installation-in-college-park-ga',
    title: 'Electrical Installation',
    shortTitle: 'Electrical Installation',
    icon: 'Plug',
    shortDescription:
      'Professional installation of wiring, outlets, fixtures, panels, and full electrical systems for homes and businesses.',
    metaTitle:
      'Electrical Installation in College Park, GA | D Best Electrical Service',
    metaDescription:
      'Professional electrical installation services in College Park, GA. Wiring, outlets, fixtures, panels and more. Call 470-414-6473 for a quote.',
    heroImage:
      'https://images.pexels.com/photos/4981793/pexels-photo-4981793.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroAlt:
      'Electrician wearing safety gear installing wiring in a new building',
    overview:
      'Whether you are building a new home, renovating a room, or adding an appliance that needs dedicated power, proper electrical installation is the foundation of a safe and reliable system. At D Best Electrical Service, we handle installations of all sizes — from a single new outlet to a complete wiring system for a new construction project. Every installation is done with attention to code requirements, safe wire sizing, and clean workmanship that lasts.',
    problems: [
      {
        title: 'New Construction Wiring',
        description:
          'Building a new home or addition requires a complete electrical rough-in and finish installation. We plan the layout, run the wiring, install boxes, and connect fixtures to deliver a system that meets code and fits how you use the space.',
      },
      {
        title: 'Adding New Circuits',
        description:
          'New appliances like ranges, dryers, EV chargers, or HVAC units often need their own dedicated circuits. We install the correct wire size, breaker, and receptacle for the specific load.',
      },
      {
        title: 'Fixture and Device Installation',
        description:
          'Installing new light fixtures, ceiling fans, outlets, switches, or smart devices requires safe connections inside the box. We make sure everything is properly secured, grounded, and rated for the application.',
      },
      {
        title: 'Renovation and Remodel Wiring',
        description:
          'During remodels, walls are opened and old wiring may need to be replaced or extended. We coordinate with your contractor to bring the electrical system up to current standards.',
      },
    ],
    process: [
      {
        title: 'Discuss Your Project',
        description:
          'Call us and describe what you need installed. We will ask about the scope, the space, and any specific devices or loads involved.',
      },
      {
        title: 'On-Site Assessment',
        description:
          'We visit the site to evaluate the existing system, routing options, and code requirements so the installation is planned correctly from the start.',
      },
      {
        title: 'Professional Installation',
        description:
          'We install the wiring, boxes, and devices with clean workmanship, test the connections, and make sure everything operates safely before we leave.',
      },
    ],
    faqs: [
      {
        question: 'Do you install electrical systems for new construction?',
        answer:
          'Yes. We provide full electrical installation for new construction projects, including rough-in wiring, panel installation, and final fixture and device connection.',
      },
      {
        question: 'Can you install a dedicated circuit for a new appliance?',
        answer:
          'Yes. We install dedicated circuits for appliances like ranges, dryers, EV chargers, and HVAC units, sized correctly for the specific load and breaker.',
      },
      {
        question: 'Do you handle installation during home renovations?',
        answer:
          'Yes. We work with homeowners and contractors during remodels to update wiring, add outlets, and install fixtures that meet current code requirements.',
      },
      {
        question: 'How do I know if my electrical panel can handle a new installation?',
        answer:
          'We assess your panel capacity during an on-site visit. If the panel does not have enough space or capacity, we will explain your options for an upgrade.',
      },
    ],
    relatedServices: [
      'electrical-wiring-rewiring-in-college-park-ga',
      'electrical-panel-services-in-college-park-ga',
      'outlet-switch-installation-in-college-park-ga',
      'indoor-lighting-installation-in-college-park-ga',
    ],
  },
  {
    slug: 'electrical-repairs-troubleshooting-in-college-park-ga',
    title: 'Electrical Repairs and Troubleshooting',
    shortTitle: 'Repairs & Troubleshooting',
    icon: 'Wrench',
    shortDescription:
      'Diagnosing and fixing electrical problems — flickering lights, dead outlets, tripping breakers, and faulty wiring.',
    metaTitle:
      'Electrical Repairs & Troubleshooting in College Park, GA | D Best Electrical Service',
    metaDescription:
      'Expert electrical repairs and troubleshooting in College Park, GA. Dead outlets, tripping breakers, flickering lights diagnosed and fixed. Call 470-414-6473.',
    heroImage:
      'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroAlt:
      'Hand of electrician working on a circuit breaker panel with colorful wires',
    overview:
      'Electrical problems can be frustrating and potentially unsafe. A dead outlet, a breaker that keeps tripping, or lights that dim when you turn on an appliance are all signs that something in your system needs attention. At D Best Electrical Service, we use a systematic troubleshooting process to find the actual cause of the problem — not just the symptom — and then make a durable repair that addresses it correctly.',
    problems: [
      {
        title: 'Outlets That Stopped Working',
        description:
          'A dead outlet could be caused by a tripped GFCI, a loose wire connection, a backstabbed wire that has come loose, or a problem further upstream in the circuit. We trace the circuit to find the failure point and repair it.',
      },
      {
        title: 'Breakers That Keep Tripping',
        description:
          'Repeated breaker trips usually mean the circuit is overloaded, there is a short circuit, or a device on the circuit is faulty. We identify the cause and either redistribute the load, fix the short, or advise on a circuit upgrade.',
      },
      {
        title: 'Flickering or Dimming Lights',
        description:
          'Lights that flicker or dim when an appliance turns on can indicate a loose connection, an overloaded circuit, or a neutral problem. We diagnose the wiring path and repair the connection.',
      },
      {
        title: 'Switches That Feel Warm or Spark',
        description:
          'A warm or sparking switch is a sign of a poor connection or excessive current. This should be addressed promptly. We replace the device and check the wiring for damage.',
      },
      {
        title: 'Burning Smell or Discolored Outlets',
        description:
          'A burning smell or discolored outlet is a serious warning sign. Stop using the outlet and call us. We inspect the wiring, replace damaged components, and check the surrounding circuit.',
      },
    ],
    process: [
      {
        title: 'Describe the Problem',
        description:
          'Call us and describe what you are experiencing — which outlets are affected, when it happens, and any patterns you have noticed.',
      },
      {
        title: 'Systematic Diagnosis',
        description:
          'We come to your home and use testing equipment to trace the circuit, identify the failure point, and determine the root cause.',
      },
      {
        title: 'Durable Repair',
        description:
          'We fix the actual problem, not just the symptom, and test the repair to make sure the circuit is safe and working correctly.',
      },
    ],
    faqs: [
      {
        question: 'How much do electrical repairs cost?',
        answer:
          'Repair costs depend on the specific problem and what is needed to fix it. We explain the issue and the repair options before starting any work.',
      },
      {
        question: 'Can you fix an outlet that stopped working?',
        answer:
          'Yes. We trace the circuit to find whether the problem is a tripped GFCI, a loose connection, or an issue upstream, and then repair it.',
      },
      {
        question: 'Why does my breaker keep tripping?',
        answer:
          'Breakers trip when a circuit is overloaded, has a short, or has a faulty device. We diagnose the specific cause and recommend the right fix.',
      },
      {
        question: 'Is a burning smell from an outlet dangerous?',
        answer:
          'A burning smell or discolored outlet is a serious warning sign. Stop using the outlet immediately and call us to inspect and repair the wiring.',
      },
    ],
    relatedServices: [
      'circuit-breaker-services-in-college-park-ga',
      'electrical-safety-inspections-in-college-park-ga',
      'outlet-switch-installation-in-college-park-ga',
      'electrical-wiring-rewiring-in-college-park-ga',
    ],
  },
  {
    slug: 'electrical-wiring-rewiring-in-college-park-ga',
    title: 'Electrical Wiring and Rewiring',
    shortTitle: 'Wiring & Rewiring',
    icon: 'Cable',
    shortDescription:
      'Complete wiring and rewiring for homes — replacing aging wires, adding new circuits, and upgrading old electrical systems.',
    metaTitle:
      'Electrical Wiring & Rewiring in College Park, GA | D Best Electrical Service',
    metaDescription:
      'Professional electrical wiring and rewiring services in College Park, GA. Replace old wiring, add circuits, upgrade your system. Call 470-414-6473.',
    heroImage:
      'https://images.pexels.com/photos/3615735/pexels-photo-3615735.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroAlt:
      'Close-up of exposed electrical wiring in wall sockets ready for installation',
    overview:
      'Wiring is the backbone of your electrical system. If your home has older wiring — such as knob-and-tube or ungrounded two-wire cable — it may not safely support the devices and appliances you use today. At D Best Electrical Service, we install new wiring for additions and renovations and rewire homes that need to replace aging or damaged wire. We route cables carefully, make secure connections, and label circuits so your system is organized and safe.',
    problems: [
      {
        title: 'Aging or Degraded Wiring',
        description:
          'Older wiring insulation can become brittle and crack over time, creating a risk of shorts or faults. We replace old cable with modern, grounded wire that meets current code.',
      },
      {
        title: 'Ungrounded Two-Prong Outlets',
        description:
          'Homes with two-prong outlets lack a ground connection, which is needed for many modern devices and for safety. We run new grounded cable and install proper three-prong receptacles.',
      },
      {
        title: 'Insufficient Circuits',
        description:
          'If your home has too few circuits, individual circuits can become overloaded. We add new circuits and distribute loads so the system has room to breathe.',
      },
      {
        title: 'Aluminum Wiring',
        description:
          'Homes wired with aluminum branch-circuit wiring (common in the 1960s and 70s) can develop loose connections at devices. We evaluate the wiring and repair or replace connections as needed.',
      },
      {
        title: 'Damaged Wiring from Renovation or Pests',
        description:
          'Wiring can be damaged during remodeling work or by rodents. We inspect the affected areas, replace damaged cable, and verify the circuit is safe.',
      },
    ],
    process: [
      {
        title: 'Assessment and Planning',
        description:
          'We inspect your current wiring, identify what needs to be replaced, and plan the routing for the new cable with minimal disruption to your home.',
      },
      {
        title: 'Careful Installation',
        description:
          'We run new cable, install boxes, and make up connections with attention to wire size, grounding, and secure splices inside accessible junction boxes.',
      },
      {
        title: 'Testing and Labeling',
        description:
          'After installation, we test every circuit for continuity, proper grounding, and correct polarity. We label the panel so you know what each breaker controls.',
      },
    ],
    faqs: [
      {
        question: 'How do I know if my home needs rewiring?',
        answer:
          'Common signs include two-prong outlets, frequently tripping breakers, flickering lights, visible damage to wiring, or a home that is more than 40 years old with original wiring. We can inspect and advise.',
      },
      {
        question: 'How long does a whole-home rewiring project take?',
        answer:
          'The timeline depends on the size of the home, accessibility of the wiring, and scope of the project. We provide a project plan after assessing the home.',
      },
      {
        question: 'Do you need to open walls to rewire a home?',
        answer:
          'In many cases, wiring can be routed through attics, crawl spaces, and existing access points with minimal wall openings. Some projects may require strategic cuts that are patched afterward.',
      },
      {
        question: 'Can you add circuits to my existing electrical system?',
        answer:
          'Yes. We add new circuits to distribute loads more effectively, support new appliances, or provide dedicated lines for specific devices.',
      },
    ],
    relatedServices: [
      'electrical-installation-in-college-park-ga',
      'electrical-panel-services-in-college-park-ga',
      'outlet-switch-installation-in-college-park-ga',
      'electrical-safety-inspections-in-college-park-ga',
    ],
  },
  {
    slug: 'electrical-panel-services-in-college-park-ga',
    title: 'Electrical Panel Services',
    shortTitle: 'Panel Services',
    icon: 'LayoutGrid',
    shortDescription:
      'Panel upgrades, replacements, and sub-panel installations to support your growing electrical needs safely.',
    metaTitle:
      'Electrical Panel Services in College Park, GA | D Best Electrical Service',
    metaDescription:
      'Electrical panel upgrade and replacement in College Park, GA. Increase capacity, add circuits, improve safety. Call 470-414-6473.',
    heroImage:
      'https://images.pexels.com/photos/28950842/pexels-photo-28950842.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroAlt:
      'Close-up of an organized circuit breaker panel featuring color-coded electrical wiring',
    overview:
      'Your electrical panel is the central distribution point for all the power in your home. If your panel is outdated, too small for your needs, or showing signs of wear, it can limit what you can safely run and create risks. At D Best Electrical Service, we install new panels, upgrade existing ones, and add sub-panels for garages, additions, and workshops. We size the panel for your current and future needs, label every circuit, and make sure the grounding system is solid.',
    problems: [
      {
        title: 'Panel Is Too Small',
        description:
          'If your panel does not have enough breaker slots for the circuits you need, or the main ampacity is too low, we install a larger panel with room for future expansion.',
      },
      {
        title: 'Outdated or Recalled Panels',
        description:
          'Some older panel brands have known performance issues. If your panel is one of these, we recommend replacement and install a modern, reliable panel.',
      },
      {
        title: 'Frequent Breaker Tripping',
        description:
          'If your panel is constantly tripping breakers, it may be undersized or have a capacity issue. We evaluate the load and recommend an upgrade if needed.',
      },
      {
        title: 'Adding a Sub-Panel',
        description:
          'For a garage workshop, home addition, or detached structure, a sub-panel provides local circuit distribution without running every circuit back to the main panel.',
      },
      {
        title: 'Corrosion or Damage',
        description:
          'Rust, corrosion, or physical damage inside a panel is a serious concern. We inspect the panel interior and replace it if the bus bars or connections are compromised.',
      },
    ],
    process: [
      {
        title: 'Load Assessment',
        description:
          'We assess your current electrical usage, the devices you plan to add, and the condition of the existing panel to determine the right size and type.',
      },
      {
        title: 'Panel Installation',
        description:
          'We safely disconnect and remove the old panel, install the new one, connect all circuits, and verify the grounding and bonding system.',
      },
      {
        title: 'Testing and Labeling',
        description:
          'Every circuit is tested for proper voltage, and the panel directory is labeled so you can identify each breaker at a glance.',
      },
    ],
    faqs: [
      {
        question: 'How do I know if I need a panel upgrade?',
        answer:
          'Signs include a panel that is full with no available slots, frequent breaker tripping, a panel rated for less than 100 amps, or an older panel brand with known issues. We can assess your panel and advise.',
      },
      {
        question: 'What size panel should I have?',
        answer:
          'Most modern homes benefit from a 200-amp panel, but the right size depends on your actual and planned electrical loads. We calculate the demand load during the assessment.',
      },
      {
        question: 'Can you add a sub-panel for my garage or workshop?',
        answer:
          'Yes. We install sub-panels for garages, workshops, additions, and detached structures, sized for the circuits you need in that space.',
      },
      {
        question: 'How long does a panel replacement take?',
        answer:
          'A typical panel replacement is completed in one day, though larger upgrades or those requiring a service upgrade may take longer. We provide a timeline before starting.',
      },
    ],
    relatedServices: [
      'circuit-breaker-services-in-college-park-ga',
      'electrical-installation-in-college-park-ga',
      'electrical-wiring-rewiring-in-college-park-ga',
      'electrical-safety-inspections-in-college-park-ga',
    ],
  },
  {
    slug: 'circuit-breaker-services-in-college-park-ga',
    title: 'Circuit Breaker Services',
    shortTitle: 'Circuit Breakers',
    icon: 'ToggleLeft',
    shortDescription:
      'Circuit breaker replacement, troubleshooting, and circuit additions to keep your electrical system protected.',
    metaTitle:
      'Circuit Breaker Services in College Park, GA | D Best Electrical Service',
    metaDescription:
      'Circuit breaker replacement and troubleshooting in College Park, GA. Fix tripping breakers, add circuits, improve safety. Call 470-414-6473.',
    heroImage:
      'https://images.pexels.com/photos/27928760/pexels-photo-27928760.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroAlt: 'Focused electrician adjusting circuit breaker panel',
    overview:
      'Circuit breakers are the safety devices that protect your wiring from overheating and faults. When a breaker trips, it is doing its job — but if breakers trip repeatedly, feel warm, or fail to reset, the circuit or the breaker itself needs attention. At D Best Electrical Service, we troubleshoot breaker issues, replace failed or outdated breakers, and add new circuits when you need more capacity.',
    problems: [
      {
        title: 'Breaker Will Not Reset',
        description:
          'If a breaker trips and will not reset, there is likely a fault on the circuit or the breaker has failed. We test the circuit for shorts and grounds, then replace the breaker if it is defective.',
      },
      {
        title: 'Repeated Tripping',
        description:
          'A breaker that trips every time you use a specific device or combination of devices indicates an overload or a fault. We identify the cause and fix it.',
      },
      {
        title: 'Breaker Feels Warm or Smells Burnt',
        description:
          'A warm or burnt-smelling breaker is a serious issue. Turn off the breaker and call us. We inspect the breaker, the bus bar connection, and the circuit.',
      },
      {
        title: 'Need More Circuit Space',
        description:
          'If your panel is full, we can install tandem breakers (if the panel allows) or recommend a panel upgrade to provide additional circuit capacity.',
      },
      {
        title: 'GFCI and AFCI Breaker Installation',
        description:
          'Modern code requires GFCI protection in wet areas and AFCI protection in living spaces. We install these breakers to bring your panel up to current safety standards.',
      },
    ],
    process: [
      {
        title: 'Diagnose the Issue',
        description:
          'We test the breaker and the circuit it feeds to determine whether the problem is a fault on the circuit, an overload, or a failed breaker.',
      },
      {
        title: 'Repair or Replace',
        description:
          'We replace failed breakers with the correct type and rating, fix any circuit faults, and install GFCI or AFCI protection where needed.',
      },
      {
        title: 'Verify and Label',
        description:
          'We test the repaired circuit under load and update the panel labeling so the circuit is clearly identified.',
      },
    ],
    faqs: [
      {
        question: 'Why does my breaker keep tripping?',
        answer:
          'Breakers trip due to overloads, short circuits, or ground faults. We test the circuit to find the specific cause and recommend the right repair.',
      },
      {
        question: 'Can a bad breaker be replaced without replacing the whole panel?',
        answer:
          'In most cases, yes. If the panel is in good condition, we can replace individual breakers. If the panel bus bar is damaged or the brand is problematic, a panel replacement may be needed.',
      },
      {
        question: 'What is the difference between a GFCI and an AFCI breaker?',
        answer:
          'GFCI breakers protect against ground faults (important in wet areas like kitchens and bathrooms). AFCI breakers protect against arc faults that can cause fires in living areas. Both are required by modern code in specific locations.',
      },
      {
        question: 'How do I know if my breakers meet current code?',
        answer:
          'Code requirements have changed over the years. We can inspect your panel and tell you whether your breakers provide the protection required for each area of your home.',
      },
    ],
    relatedServices: [
      'electrical-panel-services-in-college-park-ga',
      'electrical-repairs-troubleshooting-in-college-park-ga',
      'electrical-safety-inspections-in-college-park-ga',
      'outlet-switch-installation-in-college-park-ga',
    ],
  },
  {
    slug: 'outlet-switch-installation-in-college-park-ga',
    title: 'Outlet and Switch Installation',
    shortTitle: 'Outlets & Switches',
    icon: 'PlugZap',
    shortDescription:
      'Install new outlets, replace old switches, add GFCI protection, and upgrade to modern devices throughout your home.',
    metaTitle:
      'Outlet & Switch Installation in College Park, GA | D Best Electrical Service',
    metaDescription:
      'Outlet and switch installation in College Park, GA. Add outlets, install GFCI protection, replace old switches. Call 470-414-6473.',
    heroImage:
      'https://images.pexels.com/photos/5691494/pexels-photo-5691494.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroAlt:
      'Repairs and installation of new electrical outlet on white wall near window',
    overview:
      'Outlets and switches are the parts of your electrical system you interact with every day. Whether you need an additional outlet where there is none, a GFCI receptacle in a kitchen or bathroom, a dimmer switch for your lights, or a smart switch for automated control, D Best Electrical Service installs them safely and correctly. We make sure the box is properly supported, the wiring is secure, and the device is grounded.',
    problems: [
      {
        title: 'Not Enough Outlets',
        description:
          'Relying on power strips and extension cords is a sign you need more outlets. We install new receptacles where you need them, running new cable from the nearest circuit.',
      },
      {
        title: 'Ungrounded Two-Prong Outlets',
        description:
          'If your home still has two-prong outlets, we install grounded three-prong receptacles — either by running new grounded cable or by installing GFCI protection where applicable per code.',
      },
      {
        title: 'GFCI Protection in Kitchens and Baths',
        description:
          'Outlets near water sources require GFCI protection. We install GFCI receptacles or breakers to bring these areas up to code and improve safety.',
      },
      {
        title: 'Switch Upgrades and Dimmers',
        description:
          'We replace old toggle switches with modern dimmers, occupancy sensors, or smart switches — making sure the switch is compatible with your lighting type.',
      },
      {
        title: 'Loose or Damaged Outlets',
        description:
          'Outlets that feel loose, have cracked covers, or no longer hold a plug tightly should be replaced. We install new receptacles and check the wiring connections.',
      },
    ],
    process: [
      {
        title: 'Identify Your Needs',
        description:
          'Tell us where you need outlets or switches and what you plan to plug in or control. We advise on the right device type and placement.',
      },
      {
        title: 'Safe Installation',
        description:
          'We cut in new boxes where needed, run cable, make up connections, and install the device with proper grounding and support.',
      },
      {
        title: 'Test and Verify',
        description:
          'We test every new outlet for correct polarity and grounding, and every switch for proper operation before we pack up.',
      },
    ],
    faqs: [
      {
        question: 'Can you add an outlet anywhere in my home?',
        answer:
          'In most cases, yes. We can install a new outlet by routing cable from the nearest existing circuit, as long as the circuit has capacity. We assess the circuit load before adding.',
      },
      {
        question: 'Do I need GFCI outlets in my kitchen and bathroom?',
        answer:
          'Yes. Current code requires GFCI protection for outlets in kitchens, bathrooms, garages, outdoors, and other areas near water. We install GFCI receptacles or breakers to meet this requirement.',
      },
      {
        question: 'Can you install a dimmer switch for my LED lights?',
        answer:
          'Yes. We install dimmer switches that are compatible with your specific lighting type. LED lights require dimmers rated for LED loads to function properly.',
      },
      {
        question: 'Can you replace my two-prong outlets with three-prong?',
        answer:
          'Yes. We either run new grounded cable to provide a true ground, or install GFCI protection as permitted by code for three-prong replacement when a ground is not available.',
      },
    ],
    relatedServices: [
      'electrical-installation-in-college-park-ga',
      'electrical-wiring-rewiring-in-college-park-ga',
      'indoor-lighting-installation-in-college-park-ga',
      'circuit-breaker-services-in-college-park-ga',
    ],
  },
  {
    slug: 'indoor-lighting-installation-in-college-park-ga',
    title: 'Indoor Lighting Installation',
    shortTitle: 'Indoor Lighting',
    icon: 'Lightbulb',
    shortDescription:
      'Install recessed lights, chandeliers, under-cabinet lighting, dimmers, and modern indoor light fixtures.',
    metaTitle:
      'Indoor Lighting Installation in College Park, GA | D Best Electrical Service',
    metaDescription:
      'Indoor lighting installation in College Park, GA. Recessed lights, chandeliers, under-cabinet lighting, dimmers. Call 470-414-6473.',
    heroImage:
      'https://images.pexels.com/photos/7518747/pexels-photo-7518747.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroAlt: 'Stylish glass ball light fixtures hanging indoors with soft lighting',
    overview:
      'Lighting changes how a room looks and functions. Whether you want to brighten a dark kitchen with recessed cans, add a statement chandelier in the entryway, install under-cabinet task lighting, or put a dimmer on your dining room lights, D Best Electrical Service handles the full installation. We make sure fixtures are properly supported, wiring is safe, and switches and dimmers are matched to the lighting type.',
    problems: [
      {
        title: 'Recessed Lighting Installation',
        description:
          'We install recessed can lights in ceilings, including IC-rated fixtures for insulated ceilings, to provide clean, even lighting without visible fixtures.',
      },
      {
        title: 'Chandelier and Pendant Light Hanging',
        description:
          'Heavy fixtures require proper box support. We install fan-rated or heavy-duty boxes, hang the fixture securely, and make up the wiring safely.',
      },
      {
        title: 'Under-Cabinet and Task Lighting',
        description:
          'We install under-cabinet LED lighting, toe-kick lighting, and other task lighting to improve visibility in kitchens, offices, and workspaces.',
      },
      {
        title: 'Dimmer Switch Installation',
        description:
          'We install dimmers matched to your lighting type — incandescent, LED, or CFL — so you can adjust brightness and create the right ambiance.',
      },
      {
        title: 'Track and Rail Lighting',
        description:
          'We install track lighting systems that let you direct light where you need it, with proper support and safe wiring connections.',
      },
    ],
    process: [
      {
        title: 'Discuss Your Lighting Plan',
        description:
          'Tell us what you want to achieve — which rooms, what type of fixtures, and the look you are going for. We advise on fixture types and placement.',
      },
      {
        title: 'Professional Installation',
        description:
          'We install boxes, run wiring, mount fixtures, and connect dimmers or switches. Every connection is made up securely and tested.',
      },
      {
        title: 'Adjust and Test',
        description:
          'We test all fixtures and dimmers, adjust aiming for directional lights, and make sure everything works the way you expect before we leave.',
      },
    ],
    faqs: [
      {
        question: 'Can you install recessed lights in an existing ceiling?',
        answer:
          'Yes. We install recessed can lights in existing ceilings, using fixtures rated for the ceiling type and insulation. We route wiring through the attic or floor above when accessible.',
      },
      {
        question: 'Do I need a special dimmer for LED lights?',
        answer:
          'Yes. LED lights require dimmers specifically rated for LED loads. Standard incandescent dimmers can cause flickering or buzzing. We install the correct dimmer for your fixture type.',
      },
      {
        question: 'Can you hang a heavy chandelier?',
        answer:
          'Yes. We install fan-rated or heavy-duty ceiling boxes that can support the weight, then hang and wire the chandelier safely.',
      },
      {
        question: 'Do you install under-cabinet lighting in kitchens?',
        answer:
          'Yes. We install LED under-cabinet lighting for task visibility, with hidden wiring and convenient switch placement.',
      },
    ],
    relatedServices: [
      'outlet-switch-installation-in-college-park-ga',
      'ceiling-fan-installation-in-college-park-ga',
      'electrical-installation-in-college-park-ga',
      'outdoor-lighting-installation-in-college-park-ga',
    ],
  },
  {
    slug: 'outdoor-lighting-installation-in-college-park-ga',
    title: 'Outdoor Lighting Installation',
    shortTitle: 'Outdoor Lighting',
    icon: 'Sun',
    shortDescription:
      'Landscape lighting, exterior wall lights, security lighting, and outdoor-rated fixtures installed safely and durably.',
    metaTitle:
      'Outdoor Lighting Installation in College Park, GA | D Best Electrical Service',
    metaDescription:
      'Outdoor and landscape lighting installation in College Park, GA. Security lights, pathway lights, exterior fixtures. Call 470-414-6473.',
    heroImage:
      'https://images.pexels.com/photos/4933643/pexels-photo-4933643.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroAlt: 'A modern suburban home at dusk, beautifully lit with exterior lights',
    overview:
      'Outdoor lighting improves the look of your home at night, adds safety for walkways and steps, and can deter unwanted activity. At D Best Electrical Service, we install exterior wall lights, landscape and pathway lighting, security floodlights, and dusk-to-dawn fixtures. All outdoor installations use weather-rated fixtures, proper conduit where required, and GFCI protection to keep the system safe in wet conditions.',
    problems: [
      {
        title: 'Landscape and Pathway Lighting',
        description:
          'We install low-voltage landscape lighting to illuminate walkways, garden beds, and architectural features, with transformers and timers for automatic operation.',
      },
      {
        title: 'Security and Flood Lighting',
        description:
          'We install motion-activated floodlights and dusk-to-dawn fixtures to improve visibility around your home at night, with weather-rated fixtures and proper wiring.',
      },
      {
        title: 'Exterior Wall and Porch Lights',
        description:
          'We install or replace exterior wall sconces, porch lights, and entry fixtures with outdoor-rated boxes and weatherproof covers.',
      },
      {
        title: 'Deck and Patio Lighting',
        description:
          'We install deck post lights, step lights, and string lighting to make outdoor living spaces usable and attractive after dark.',
      },
      {
        title: 'Outdoor Outlet Installation',
        description:
          'We install weatherproof GFCI outlets outdoors for holiday lights, tools, and outdoor appliances, with in-use covers that protect the receptacle when something is plugged in.',
      },
    ],
    process: [
      {
        title: 'Plan the Lighting Layout',
        description:
          'We walk the property with you, discuss where you need light and what you want to highlight, and recommend fixture types and placement.',
      },
      {
        title: 'Weather-Rated Installation',
        description:
          'We install outdoor-rated fixtures, run wiring in conduit where required, and provide GFCI protection for all outdoor circuits.',
      },
      {
        title: 'Aim and Test',
        description:
          'We adjust fixture angles, set motion sensor ranges and timer schedules, and test the system after dark if needed.',
      },
    ],
    faqs: [
      {
        question: 'Can you install landscape lighting around my yard?',
        answer:
          'Yes. We install low-voltage landscape lighting for pathways, garden areas, and architectural features, with a transformer and timer or photocell for automatic operation.',
      },
      {
        question: 'Do outdoor outlets need special protection?',
        answer:
          'Yes. Outdoor outlets require GFCI protection and weather-resistant receptacles with in-use covers that protect the outlet even when something is plugged in. We install all of these.',
      },
      {
        question: 'Can you install motion-activated security lights?',
        answer:
          'Yes. We install motion-sensor floodlights with adjustable range and sensitivity, plus dusk-to-dawn fixtures that turn on automatically at night.',
      },
      {
        question: 'What kind of fixtures should I use outdoors?',
        answer:
          'All outdoor fixtures should be wet-location rated. We can recommend durable fixtures that withstand rain and humidity, and install them with proper weatherproof boxes.',
      },
    ],
    relatedServices: [
      'indoor-lighting-installation-in-college-park-ga',
      'outlet-switch-installation-in-college-park-ga',
      'electrical-installation-in-college-park-ga',
      'electrical-safety-inspections-in-college-park-ga',
    ],
  },
  {
    slug: 'ceiling-fan-installation-in-college-park-ga',
    title: 'Ceiling Fan Installation',
    shortTitle: 'Ceiling Fans',
    icon: 'Fan',
    shortDescription:
      'Ceiling fan installation, replacement, and wiring — including fan-rated box installation and switch wiring.',
    metaTitle:
      'Ceiling Fan Installation in College Park, GA | D Best Electrical Service',
    metaDescription:
      'Ceiling fan installation and replacement in College Park, GA. Fan-rated boxes, switch wiring, remote controls. Call 470-414-6473.',
    heroImage:
      'https://images.pexels.com/photos/6835102/pexels-photo-6835102.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroAlt:
      'Bright empty living room with wooden floor and ceiling fan',
    overview:
      'Ceiling fans improve air circulation and comfort while reducing the load on your HVAC system. But a ceiling fan is a heavy, moving fixture that must be properly supported — a standard light box is not strong enough. At D Best Electrical Service, we install fan-rated boxes, wire the fan safely, and set up the control method you prefer, whether that is a wall switch, a remote, or a pull chain.',
    problems: [
      {
        title: 'No Existing Fan Box',
        description:
          'If you want a ceiling fan where there was only a light fixture, we install a fan-rated box that can support the weight and movement of a fan.',
      },
      {
        title: 'Wobbly or Noisy Fan',
        description:
          'A fan that wobbles or makes noise may be unbalanced, have loose mounting, or be installed on an inadequate box. We inspect the mounting and fix the issue.',
      },
      {
        title: 'Fan with Light Kit',
        description:
          'We install ceiling fans with integrated light kits, wiring the light and fan independently so you can control them separately with a dual switch or remote.',
      },
      {
        title: 'Remote Control Installation',
        description:
          'We install remote receivers so you can control fan speed and lighting from a handheld remote, without needing to run new wiring to the wall.',
      },
      {
        title: 'Outdoor Ceiling Fans',
        description:
          'We install damp-rated and wet-rated ceiling fans on covered porches and patios, with proper weather-rated boxes and wiring.',
      },
    ],
    process: [
      {
        title: 'Check the Mounting',
        description:
          'We inspect the existing ceiling box to see if it is fan-rated. If not, we install a proper fan-rated box with secure mounting to the joist or blocking.',
      },
      {
        title: 'Wire and Hang',
        description:
          'We assemble the fan, wire it to the box, and secure it to the mounting bracket. If there is a light kit or remote, we wire those as well.',
      },
      {
        title: 'Balance and Test',
        description:
          'We check the fan for balance, test all speeds and light functions, and make sure there is no wobble at any speed setting.',
      },
    ],
    faqs: [
      {
        question: 'Can you install a ceiling fan where there is only a light fixture?',
        answer:
          'Yes. We replace the standard light box with a fan-rated box that can safely support the weight and vibration of a ceiling fan, then install and wire the fan.',
      },
      {
        question: 'Why is my ceiling fan wobbling?',
        answer:
          'Wobbling can be caused by an unbalanced fan, loose mounting, or an inadequate ceiling box. We inspect the mounting and blade balance, and fix the cause.',
      },
      {
        question: 'Can you wire a fan and light on separate switches?',
        answer:
          'Yes. If there is wiring for two switches, we wire the fan motor and light kit independently so each can be controlled from its own wall switch.',
      },
      {
        question: 'Can you install a ceiling fan on a covered porch?',
        answer:
          'Yes. We install outdoor-rated (damp or wet location) ceiling fans on covered porches and patios with weather-rated boxes and wiring.',
      },
    ],
    relatedServices: [
      'indoor-lighting-installation-in-college-park-ga',
      'outlet-switch-installation-in-college-park-ga',
      'electrical-installation-in-college-park-ga',
      'outdoor-lighting-installation-in-college-park-ga',
    ],
  },
  {
    slug: 'electrical-safety-inspections-in-college-park-ga',
    title: 'Electrical Safety Inspections and Diagnostics',
    shortTitle: 'Safety Inspections',
    icon: 'ShieldCheck',
    shortDescription:
      'Whole-home electrical safety inspections, diagnostic testing, and code compliance assessments.',
    metaTitle:
      'Electrical Safety Inspections in College Park, GA | D Best Electrical Service',
    metaDescription:
      'Electrical safety inspections and diagnostics in College Park, GA. Whole-home inspection, code compliance, safety assessment. Call 470-414-6473.',
    heroImage:
      'https://images.pexels.com/photos/10871929/pexels-photo-10871929.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroAlt:
      'Technician wearing safety gear inspecting electrical panels',
    overview:
      'An electrical safety inspection is one of the most valuable things you can do for your home, especially if you have just moved in, are planning a renovation, or live in an older house. At D Best Electrical Service, we inspect the panel, wiring, outlets, grounding, and key devices throughout the home. You receive a clear report of what we found, what is safe, and what may need attention — with no pressure and no exaggeration.',
    problems: [
      {
        title: 'Whole-Home Safety Inspection',
        description:
          'We inspect the main panel, check breakers and wire connections, test outlets for grounding and polarity, check GFCI and AFCI protection, and look for visible wiring issues throughout the home.',
      },
      {
        title: 'Pre-Purchase Electrical Assessment',
        description:
          'If you are buying a home, we provide an electrical assessment so you understand the condition of the wiring, panel, and devices before you commit.',
      },
      {
        title: 'Older Home Wiring Check',
        description:
          'Homes built decades ago may have wiring that no longer meets code or has degraded over time. We inspect the wiring type, condition, and capacity.',
      },
      {
        title: 'Code Compliance Review',
        description:
          'If you are renovating or adding to your home, we review the existing electrical system for code compliance and identify what needs to be updated.',
      },
      {
        title: 'Diagnostic Testing',
        description:
          'If you are experiencing unexplained electrical issues, we perform diagnostic testing to identify the cause — voltage readings, continuity tests, and circuit tracing.',
      },
    ],
    process: [
      {
        title: 'Schedule the Inspection',
        description:
          'Call us to schedule a visit. We set aside the time needed to thoroughly inspect your electrical system.',
      },
      {
        title: 'Thorough Assessment',
        description:
          'We inspect the panel, test representative outlets, check grounding and protection devices, and visually assess accessible wiring throughout the home.',
      },
      {
        title: 'Clear Report',
        description:
          'You receive a straightforward summary of what we found — what is in good shape, what to keep an eye on, and what should be addressed. No exaggeration.',
      },
    ],
    faqs: [
      {
        question: 'How often should I get an electrical safety inspection?',
        answer:
          'For most homes, every 5 to 10 years is reasonable. You should also get an inspection when buying a home, before a major renovation, or if your home is more than 40 years old.',
      },
      {
        question: 'What does an electrical inspection include?',
        answer:
          'We inspect the main panel, test outlets for grounding and polarity, check GFCI and AFCI protection, look for visible wiring issues, and assess the overall condition of the system.',
      },
      {
        question: 'Do you inspect homes before purchase?',
        answer:
          'Yes. We provide a pre-purchase electrical assessment so you understand the condition of the wiring, panel, and devices before buying.',
      },
      {
        question: 'Will you tell me if something needs to be fixed?',
        answer:
          'Yes. You receive a clear report noting what is safe, what to monitor, and what should be addressed. We explain the findings in plain language with no pressure.',
      },
    ],
    relatedServices: [
      'electrical-repairs-troubleshooting-in-college-park-ga',
      'electrical-panel-services-in-college-park-ga',
      'electrical-wiring-rewiring-in-college-park-ga',
      'circuit-breaker-services-in-college-park-ga',
    ],
  },
];

export interface ServiceAreaData {
  slug: string;
  name: string;
  primaryService: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
}

export const serviceAreas: ServiceAreaData[] = [
  {
    slug: 'electrician-college-park-ga',
    name: 'College Park, GA',
    primaryService: 'electrical-panel-services-in-college-park-ga',
    description:
      'D Best Electrical Service is based in College Park, Georgia, and provides electrical panel upgrades, wiring repairs, outlet installations, and safety inspections. Whether you need a residential electrician in College Park for a home renovation, or an emergency electrician in College Park for an urgent daytime hazard, we are here to help. As a trusted local electrical contractor in College Park GA, we understand the local housing stock — from mid-century homes needing rewiring to newer construction requiring dedicated circuits.',
    metaTitle:
      'Electrician in College Park, GA | D Best Electrical Service',
    metaDescription:
      'Looking for an electrician near College Park GA? We are a local electrical contractor providing residential wiring, panels, and emergency electrician services. Call 470-414-6473.',
  },
  {
    slug: 'electrician-east-point-ga',
    name: 'East Point, GA',
    primaryService: 'electrical-repairs-troubleshooting-in-college-park-ga',
    description:
      'We provide electrical repair and troubleshooting services to homeowners in East Point, Georgia. From outlets that have stopped working to breakers that trip repeatedly, we diagnose the problem and make durable repairs. We also handle lighting installations, ceiling fan installations, and safety inspections for East Point residents.',
    metaTitle:
      'Electrician in East Point, GA | D Best Electrical Service',
    metaDescription:
      'Electrical repairs and troubleshooting in East Point, GA. Outlets, breakers, lighting, safety inspections. Call 470-414-6473.',
  },
  {
    slug: 'electrician-union-city-ga',
    name: 'Union City, GA',
    primaryService: 'outlet-switch-installation-in-college-park-ga',
    description:
      'Homeowners in Union City, Georgia can count on D Best Electrical Service for outlet and switch installation, GFCI protection upgrades, lighting installations, and electrical safety inspections. Whether you need additional outlets for a growing household or want to update old switches to modern dimmers, we handle the installation safely and cleanly.',
    metaTitle:
      'Electrician in Union City, GA | D Best Electrical Service',
    metaDescription:
      'Outlet installation, switches, lighting, and electrical repairs in Union City, GA. Call 470-414-6473.',
  },
  {
    slug: 'electrician-fairburn-ga',
    name: 'Fairburn, GA',
    primaryService: 'electrical-wiring-rewiring-in-college-park-ga',
    description:
      'D Best Electrical Service provides wiring and rewiring services to homes in Fairburn, Georgia. If your home has aging wiring, insufficient circuits, or ungrounded outlets, we assess the system and replace what needs to be replaced with modern, code-compliant wiring. We also handle panel upgrades, lighting, and general electrical repairs in the Fairburn area.',
    metaTitle:
      'Electrician in Fairburn, GA | D Best Electrical Service',
    metaDescription:
      'Electrical wiring, rewiring, panel upgrades, and repairs in Fairburn, GA. Call 470-414-6473.',
  },
  {
    slug: 'electrician-hapeville-ga',
    name: 'Hapeville, GA',
    primaryService: 'indoor-lighting-installation-in-college-park-ga',
    description:
      'For homeowners in Hapeville, Georgia, D Best Electrical Service provides indoor lighting installation, ceiling fan installation, outlet and switch upgrades, and electrical troubleshooting. From recessed lighting to dimmer switches to new fixtures, we install lighting that improves the look and function of your home.',
    metaTitle:
      'Electrician in Hapeville, GA | D Best Electrical Service',
    metaDescription:
      'Lighting installation, ceiling fans, outlets, and electrical repairs in Hapeville, GA. Call 470-414-6473.',
  },
  {
    slug: 'electrician-south-atlanta-ga',
    name: 'South Atlanta, GA',
    primaryService: 'circuit-breaker-services-in-college-park-ga',
    description:
      'We provide circuit breaker services, panel inspections, and electrical repairs to homeowners in the South Atlanta area. If your breakers are tripping, your panel needs updating, or you need additional circuits, we diagnose the issue and make the right repair. We also handle lighting, outlets, and safety inspections.',
    metaTitle:
      'Electrician in South Atlanta, GA | D Best Electrical Service',
    metaDescription:
      'Circuit breaker services, panel upgrades, and electrical repairs in South Atlanta, GA. Call 470-414-6473.',
  },
  {
    slug: 'electrician-riverdale-ga',
    name: 'Riverdale, GA',
    primaryService: 'ceiling-fan-installation-in-college-park-ga',
    description:
      'D Best Electrical Service serves homeowners in Riverdale, Georgia with ceiling fan installation, indoor and outdoor lighting, outlet installation, and electrical troubleshooting. We install fan-rated boxes, wire fans with light kits, and set up the control method that works best for your space.',
    metaTitle:
      'Electrician in Riverdale, GA | D Best Electrical Service',
    metaDescription:
      'Ceiling fan installation, lighting, outlets, and electrical repairs in Riverdale, GA. Call 470-414-6473.',
  },
  {
    slug: 'electrician-peachtree-city-ga',
    name: 'Peachtree City, GA',
    primaryService: 'outdoor-lighting-installation-in-college-park-ga',
    description:
      'For homeowners in Peachtree City, Georgia, D Best Electrical Service provides outdoor lighting installation, landscape lighting, security lighting, and exterior outlet installation. We also handle indoor lighting, ceiling fans, panel upgrades, and general electrical repairs. All outdoor installations use weather-rated fixtures and GFCI protection.',
    metaTitle:
      'Electrician in Peachtree City, GA | D Best Electrical Service',
    metaDescription:
      'Outdoor lighting, landscape lighting, and electrical services in Peachtree City, GA. Call 470-414-6473.',
  },
  {
    slug: 'electrician-lanett-al',
    name: 'Lanett, AL',
    primaryService: 'electrical-repairs-troubleshooting-in-college-park-ga',
    description:
      'D Best Electrical Service provides residential electrical services to homeowners in Lanett, Alabama. Whether you need wiring repairs, lighting installation, panel upgrades, or troubleshooting, we handle the work safely and cleanly.',
    metaTitle:
      'Electrician in Lanett, AL | D Best Electrical Service',
    metaDescription:
      'Local electrician serving Lanett, AL. Electrical repairs, panel upgrades, wiring, outlets, and lighting. Call 470-414-6473.',
  },
];

export const generalFaqs = [
  {
    question: 'What areas does D Best Electrical Service serve?',
    answer:
      'We are based in College Park, Georgia, and serve surrounding communities including East Point, Union City, Fairburn, Hapeville, South Atlanta, Riverdale, and Peachtree City. Call us to confirm we cover your location.',
  },
  {
    question: 'How do I schedule electrical work?',
    answer:
      'Call us at 470-414-6473. Tell us what you need, and we will arrange a time to visit your home, assess the work, and schedule the job.',
  },
  {
    question: 'Do you provide free estimates?',
    answer:
      'We discuss your needs over the phone and provide an on-site assessment. Call us to talk through your project and we will explain the process.',
  },
  {
    question: 'What should I do before the electrician arrives?',
    answer:
      'Make sure the area where the work will be done is accessible — clear furniture, boxes, or stored items away from the panel, outlets, or fixtures. If possible, note when the problem occurs and any patterns you have noticed, as this helps with diagnosis.',
  },
  {
    question: 'Are you licensed and insured?',
    answer:
      'We are committed to safe, code-compliant work. Please call us at 470-414-6473 to discuss any specific questions about credentials or insurance for your project.',
  },
  {
    question: 'Can you help with an electrical emergency?',
    answer:
      'If you have an urgent safety concern — such as a burning smell, sparking, or a hot panel — turn off power at the breaker if you can do so safely and call us. We will discuss your situation and arrange the soonest possible visit.',
  },
  {
    question: 'What types of electrical work do you do?',
    answer:
      'We handle electrical installation, repairs and troubleshooting, wiring and rewiring, panel services, circuit breakers, outlets and switches, indoor and outdoor lighting, ceiling fans, and safety inspections for residential properties.',
  },
  {
    question: 'Do you work on commercial properties?',
    answer:
      'Our primary focus is residential electrical work. Call us at 470-414-6473 to discuss your specific needs and we will let you know if we can help.',
  },
];

export const whyChooseUs = [
  {
    icon: 'MessageSquare',
    title: 'Clear Communication',
    description:
      'We explain what we found, what needs to be done, and why — in plain language, without pressure or jargon. You will understand the work before we start.',
  },
  {
    icon: 'Hammer',
    title: 'Careful Workmanship',
    description:
      'Every connection is made up securely, every device is properly supported, and every circuit is tested before we pack up. We take pride in clean, durable work.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Safety-Conscious Service',
    description:
      'We follow safe work practices on every job, from verifying power is off before touching a wire to checking grounding and protection devices on every circuit.',
  },
  {
    icon: 'MapPin',
    title: 'Local to College Park',
    description:
      'We are based in College Park, Georgia, and serve the surrounding communities. When you call, you are talking to a local electrical service provider.',
  },
];

export const serviceProcess = [
  {
    icon: 'Phone',
    title: 'Contact Us',
    description:
      'Call 470-414-6473 and tell us what you need. We will ask about the issue, the space, and your goals for the project.',
    step: '01',
  },
  {
    icon: 'ClipboardList',
    title: 'Discuss the Issue',
    description:
      'We visit your home to assess the situation, identify the cause or scope, and explain the work in plain language with clear options.',
    step: '02',
  },
  {
    icon: 'Wrench',
    title: 'Arrange the Work',
    description:
      'We schedule the job at a time that works for you, complete the work with care, and test everything before we leave.',
    step: '03',
  },
];
