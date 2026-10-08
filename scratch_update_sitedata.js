import fs from 'fs';

const services = [
  {
    slug: 'electrical-installation-in-college-park-ga',
    title: 'Electrical Installation',
    shortTitle: 'Electrical Installation',
    icon: 'Plug',
    shortDescription: 'Professional installation of wiring, outlets, fixtures, panels, and full electrical systems.',
    metaTitle: 'Electrical Installation in College Park, GA | D Best Electrical Service',
    metaDescription: 'Professional electrical installation services in College Park, GA. New installations, fixtures, switches, wiring and panels. Call 404-397-9782.',
    heroImage: 'https://images.pexels.com/photos/4981793/pexels-photo-4981793.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroAlt: 'Electrician wearing safety gear installing wiring',
    overview: 'D Best Electrical Service handles installations of all sizes. From adding a new light fixture to wiring a complete home addition, our licensed electricians ensure every connection is secure and meets the National Electrical Code. We prioritize safety and clean workmanship on every project.',
    problems: [
      { title: 'New Electrical Installations', description: 'We provide complete electrical installation for new construction, additions, and remodels, ensuring your new space is wired safely and efficiently from the ground up.' },
      { title: 'Fixture Installation', description: 'We safely install chandeliers, pendant lights, ceiling fans, and other heavy fixtures, verifying the ceiling box can support the weight and the wiring is correct.' },
      { title: 'Switches and Outlets', description: 'Need more power access? We install new standard outlets, GFCI receptacles for wet areas, dimmer switches, and smart switches to improve your home\'s convenience.' },
      { title: 'Wiring Projects', description: 'From running a new dedicated circuit for an appliance to extending wiring for a renovation, we route cables cleanly and make secure connections.' },
      { title: 'Panel-Related Installation', description: 'We install new main breaker panels and sub-panels for garages or additions to ensure your electrical system has the capacity to support your needs.' },
      { title: 'Safety and Code Considerations', description: 'Every installation we perform strictly adheres to the National Electrical Code (NEC). We pull permits when required and ensure all work passes inspection for your peace of mind.' }
    ],
    gallery: [
      'https://images.pexels.com/photos/5691494/pexels-photo-5691494.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      'https://images.pexels.com/photos/7518747/pexels-photo-7518747.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      'https://images.pexels.com/photos/28950842/pexels-photo-28950842.jpeg?auto=compress&cs=tinysrgb&h=400&w=600'
    ],
    process: [
      { title: 'Discuss Your Project', description: 'Call us to describe your installation needs. We will ask about the scope and specific devices.' },
      { title: 'On-Site Assessment', description: 'We evaluate the existing system and code requirements to plan the installation correctly.' },
      { title: 'Professional Installation', description: 'We install the wiring and devices, test the connections, and ensure safe operation.' }
    ],
    faqs: [
      { question: 'Do you handle installation during home renovations?', answer: 'Yes. We work with homeowners and contractors during remodels to update wiring and install fixtures.' },
      { question: 'Can you install a dedicated circuit for a new appliance?', answer: 'Yes. We install dedicated circuits for ranges, dryers, EV chargers, and HVAC units.' }
    ],
    relatedServices: ['electrical-wiring-rewiring-in-college-park-ga', 'outlet-switch-installation-in-college-park-ga']
  },
  {
    slug: 'electrical-repairs-troubleshooting-in-college-park-ga',
    title: 'Electrical Repairs and Troubleshooting',
    shortTitle: 'Repairs & Troubleshooting',
    icon: 'Wrench',
    shortDescription: 'Diagnosing and fixing electrical problems — flickering lights, dead outlets, tripping breakers.',
    metaTitle: 'Electrical Repairs & Troubleshooting in College Park, GA | D Best',
    metaDescription: 'Expert electrical repairs in College Park. We fix flickering lights, dead outlets, frequent breaker trips, and faulty wiring safely. Call 404-397-9782.',
    heroImage: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroAlt: 'Hand of electrician working on a circuit breaker panel',
    overview: 'Electrical problems require a systematic approach to identify the root cause. We don\'t just treat symptoms; we diagnose the underlying issue to provide a safe, permanent repair for your home.',
    problems: [
      { title: 'Flickering Lights', description: 'Symptom: Lights dim or flicker when appliances turn on. Diagnosis: Loose neutral connection or overloaded circuit. Solution: We trace the circuit, repair the connection, or redistribute the load.' },
      { title: 'Dead Outlets', description: 'Symptom: Plugs have no power. Diagnosis: Tripped GFCI, loose backstabbed wire, or upstream fault. Solution: We identify the failure point and securely reconnect or replace the receptacle.' },
      { title: 'Frequent Breaker Trips', description: 'Symptom: You constantly have to reset a breaker. Diagnosis: Circuit overload or short circuit. Solution: We test the load and either repair the short or add a dedicated circuit.' },
      { title: 'Burning Smell or Electrical Buzzing', description: 'Symptom: A fishy or burning odor, or a buzzing sound from a switch. Diagnosis: Arcing or overheating wire connections. Solution: Immediate replacement of the damaged device and burnt wiring.' },
      { title: 'Power Loss', description: 'Symptom: Partial power loss in the home. Diagnosis: Dropped leg from the utility or main breaker failure. Solution: We test incoming voltage and coordinate with the utility or replace the main breaker.' },
      { title: 'Faulty Wiring & Diagnostics', description: 'Symptom: Unexplained electrical gremlins. Diagnosis: Rodent damage or degraded insulation. Solution: We use advanced diagnostic tools to pinpoint hidden faults and replace the damaged wiring safely.' }
    ],
    process: [
      { title: 'Describe the Problem', description: 'Tell us what you are experiencing and any patterns you have noticed.' },
      { title: 'Systematic Diagnosis', description: 'We use testing equipment to trace the circuit and find the root cause.' },
      { title: 'Durable Repair', description: 'We fix the actual problem and test the circuit to ensure safety.' }
    ],
    faqs: [
      { question: 'Why does my breaker keep tripping?', answer: 'Breakers trip when a circuit is overloaded or has a short. We diagnose the specific cause.' },
      { question: 'Is a burning smell from an outlet dangerous?', answer: 'Yes. It is a serious fire hazard. Stop using the outlet and call us immediately.' }
    ],
    relatedServices: ['circuit-breaker-services-in-college-park-ga', 'electrical-safety-inspections-in-college-park-ga']
  },
  {
    slug: 'electrical-wiring-rewiring-in-college-park-ga',
    title: 'Electrical Wiring and Rewiring',
    shortTitle: 'Wiring & Rewiring',
    icon: 'Cable',
    shortDescription: 'Complete wiring and rewiring for homes — replacing aging wires and upgrading systems.',
    metaTitle: 'Electrical Wiring & Rewiring in College Park, GA | D Best',
    metaDescription: 'Professional electrical wiring and house rewiring in College Park, GA. Replace old, damaged wiring and improve home safety. Call 404-397-9782.',
    heroImage: 'https://images.pexels.com/photos/3615735/pexels-photo-3615735.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroAlt: 'Close-up of exposed electrical wiring in wall sockets',
    overview: 'Your home\'s electrical wiring is the backbone of your power system. As a trusted electrical wiring contractor in College Park, GA, we handle new construction wiring, room additions, and whole-house rewiring to replace unsafe, outdated cables.',
    problems: [
      { title: 'New Construction & Addition Wiring', description: 'We design and install clean, code-compliant electrical wiring for new homes and room additions, ensuring you have power exactly where you need it.' },
      { title: 'Whole-Home Rewiring', description: 'For older homes with degraded insulation or ungrounded systems, we provide comprehensive house rewiring in College Park, GA to bring your property up to modern safety standards.' },
      { title: 'Damaged Wiring Replacement', description: 'Rodents, water damage, or poor previous workmanship can compromise your wires. We locate and replace damaged sections safely.' },
      { title: 'Outdated Wiring Updates', description: 'We safely replace obsolete wiring types like knob-and-tube or aluminum branch circuits that pose fire hazards.' },
      { title: 'Safety Signs You Need Rewiring', description: 'If you have two-prong outlets, frequent blown fuses, or tingling sensations when touching appliances, it is time to have your wiring evaluated.' }
    ],
    gallery: [
      'https://images.pexels.com/photos/4981793/pexels-photo-4981793.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      'https://images.pexels.com/photos/3615735/pexels-photo-3615735.jpeg?auto=compress&cs=tinysrgb&h=400&w=600'
    ],
    process: [
      { title: 'Assessment and Planning', description: 'We inspect your current wiring and plan the routing for the new cable with minimal disruption.' },
      { title: 'Careful Installation', description: 'We run new cable and make secure splices inside accessible junction boxes.' },
      { title: 'Testing and Labeling', description: 'We test every circuit for continuity, grounding, and polarity.' }
    ],
    faqs: [
      { question: 'How do I know if my home needs rewiring?', answer: 'Signs include two-prong outlets, flickering lights, visible damage, or a home more than 40 years old.' },
      { question: 'Do you need to open walls to rewire a home?', answer: 'We route through attics and crawl spaces when possible, though strategic drywall cuts are sometimes necessary.' }
    ],
    relatedServices: ['electrical-panel-services-in-college-park-ga', 'electrical-safety-inspections-in-college-park-ga']
  },
  {
    slug: 'electrical-panel-services-in-college-park-ga',
    title: 'Electrical Panel Services',
    shortTitle: 'Panel Services',
    icon: 'LayoutGrid',
    shortDescription: 'Panel upgrades, replacements, and sub-panel installations to support your needs safely.',
    metaTitle: 'Electrical Panel Services in College Park, GA | D Best',
    metaDescription: 'Electrical panel upgrades, replacements, and sub-panel installations in College Park, GA. Increase your home capacity safely. Call 404-397-9782.',
    heroImage: 'https://images.pexels.com/photos/28950842/pexels-photo-28950842.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroAlt: 'Close-up of an organized circuit breaker panel',
    overview: 'Your electrical panel is the heart of your home\'s power distribution. We specialize in upgrading and replacing outdated or undersized panels so your home can safely handle modern electrical demands.',
    problems: [
      { title: 'Electrical Panel Upgrade', description: 'We upgrade 100-amp panels to 200-amp service, giving your home the capacity needed for modern appliances, EV chargers, and HVAC systems.' },
      { title: 'Electrical Panel Replacement', description: 'We replace outdated, recalled, or corroded panels (such as Federal Pacific or Zinsco) with modern, reliable equipment that meets current NEC standards.' },
      { title: 'Subpanel Installation', description: 'Need power for a garage workshop, shed, or home addition? We install subpanels to distribute power efficiently without overloading your main breaker box.' },
      { title: 'Signs Your Panel Needs Attention', description: 'Rust, scorching, buzzing sounds, or a panel that is completely full of breakers are clear indicators that an inspection and possible replacement is necessary.' },
      { title: 'Panel Capacity & Breaker Issues', description: 'If breakers trip frequently when multiple appliances run, your panel capacity is likely exceeded. We evaluate your load demand and correct the distribution.' },
      { title: 'Safety When to Call an Electrician', description: 'Never attempt DIY panel work. The bus bars inside are always live and extremely dangerous. Call us for any panel-related concerns.' }
    ],
    process: [
      { title: 'Load Assessment', description: 'We calculate your electrical usage and condition of the existing panel to determine the right size.' },
      { title: 'Panel Installation', description: 'We safely remove the old panel, install the new one, and verify grounding and bonding.' },
      { title: 'Testing and Labeling', description: 'Every circuit is tested for proper voltage, and the panel directory is accurately labeled.' }
    ],
    faqs: [
      { question: 'What size panel should I have?', answer: 'Most modern homes require a 200-amp panel, but we calculate your specific demand load during our assessment.' },
      { question: 'How long does a panel replacement take?', answer: 'A typical replacement takes one full day to complete and restore power.' }
    ],
    relatedServices: ['circuit-breaker-services-in-college-park-ga', 'electrical-wiring-rewiring-in-college-park-ga']
  },
  {
    slug: 'circuit-breaker-services-in-college-park-ga',
    title: 'Circuit Breaker Services',
    shortTitle: 'Circuit Breakers',
    icon: 'ToggleLeft',
    shortDescription: 'Breaker replacement, troubleshooting, and circuit additions.',
    metaTitle: 'Circuit Breaker Services in College Park, GA | D Best',
    metaDescription: 'Circuit breaker troubleshooting and replacement in College Park, GA. Fix tripping breakers and circuit overloads. Call 404-397-9782.',
    heroImage: 'https://images.pexels.com/photos/27928760/pexels-photo-27928760.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroAlt: 'Electrician adjusting circuit breaker panel',
    overview: 'Circuit breakers protect your home from electrical fires. When they trip frequently or fail to reset, it\'s a warning sign. We accurately diagnose breaker issues and restore safe power delivery.',
    problems: [
      { title: 'Breaker Keeps Tripping', description: 'A tripping breaker is doing its job by cutting power during a fault. We trace the circuit to find out whether it\'s a short circuit, ground fault, or appliance issue.' },
      { title: 'Breaker Replacement', description: 'Breakers can wear out over time. If a breaker feels hot, smells burnt, or won\'t reset despite a clear circuit, we replace it with the exact manufacturer-specified part.' },
      { title: 'Breaker Troubleshooting', description: 'We test voltage and amperage at the panel to verify if the breaker is faulty or if the circuit wiring is compromised.' },
      { title: 'Circuit Overload', description: 'Running a microwave and a space heater on the same circuit? We solve overloads by installing new dedicated circuits to split the power demand safely.' },
      { title: 'Electrical Fault Diagnosis', description: 'Using specialized meters, we locate hidden electrical faults in your walls that cause breakers to trip instantly.' },
      { title: 'Urgent Service Available', description: 'If a main breaker fails or a breaker begins sparking, we provide prompt service during business hours to secure your home.' }
    ],
    process: [
      { title: 'Diagnose the Issue', description: 'We test the breaker and circuit to determine if the problem is a fault, overload, or failed component.' },
      { title: 'Repair or Replace', description: 'We replace bad breakers, fix faults, and install AFCI/GFCI protection where needed.' },
      { title: 'Verify and Label', description: 'We test the repaired circuit under load and update the panel directory.' }
    ],
    faqs: [
      { question: 'Why does my breaker keep tripping?', answer: 'It is usually due to an overloaded circuit, a short circuit, or a faulty appliance. We test to find the exact cause.' },
      { question: 'Can a bad breaker be replaced without replacing the panel?', answer: 'Yes, as long as the panel bus bar is not damaged and the panel brand is safe.' }
    ],
    relatedServices: ['electrical-repairs-troubleshooting-in-college-park-ga', 'electrical-panel-services-in-college-park-ga']
  },
  {
    slug: 'outlet-switch-installation-in-college-park-ga',
    title: 'Outlet and Switch Installation',
    shortTitle: 'Outlets & Switches',
    icon: 'PlugZap',
    shortDescription: 'Install new outlets, replace switches, and add GFCI protection.',
    metaTitle: 'Outlet & Switch Installation in College Park, GA | D Best',
    metaDescription: 'Safe outlet and switch installation in College Park, GA. GFCI upgrades, replacements, and dimmer switches. Call 404-397-9782.',
    heroImage: 'https://images.pexels.com/photos/5691494/pexels-photo-5691494.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroAlt: 'Installation of new electrical outlet',
    overview: 'Functioning outlets and switches are essential for daily life. We install, replace, and upgrade electrical receptacles securely to ensure safe, reliable power for all your devices.',
    problems: [
      { title: 'Outlet Installation', description: 'Tired of extension cords? We install new standard and high-capacity outlets exactly where you need them, properly grounded and secured.' },
      { title: 'Switch Installation', description: 'We upgrade old toggle switches to modern rocker switches, install dimmers for ambiance, and wire 3-way switches for hallway convenience.' },
      { title: 'Replacement Services', description: 'We replace loose, painted-over, or worn-out outlets that can no longer hold a plug tightly, eliminating a common fire hazard.' },
      { title: 'GFCI-Related Work', description: 'We install Ground Fault Circuit Interrupter (GFCI) outlets in kitchens, bathrooms, and garages to protect against shock, as required by electrical code.' },
      { title: 'Damaged Outlet Replacement', description: 'If an outlet is scorched, cracked, or buzzing, we safely remove it, check the wiring for damage, and install a new receptacle.' },
      { title: 'Smart Switch Installation', description: 'We install Wi-Fi enabled smart switches so you can control your home lighting via smartphone or voice assistant.' },
      { title: 'Safety Checks', description: 'With every installation, we verify correct polarity, solid grounding, and proper wire gauge to ensure complete safety.' }
    ],
    process: [
      { title: 'Identify Your Needs', description: 'We advise on the right device type and placement based on what you plan to plug in.' },
      { title: 'Safe Installation', description: 'We run cable, make up secure connections, and mount the device with proper support.' },
      { title: 'Test and Verify', description: 'Every new outlet and switch is tested for correct polarity, grounding, and operation.' }
    ],
    faqs: [
      { question: 'Do I need GFCI outlets in my kitchen?', answer: 'Yes. Code requires GFCI protection for outlets in kitchens, baths, and outdoors.' },
      { question: 'Can you install a dimmer switch for LED lights?', answer: 'Yes. We install LED-compatible dimmers to prevent flickering.' }
    ],
    relatedServices: ['indoor-lighting-installation-in-college-park-ga', 'electrical-repairs-troubleshooting-in-college-park-ga']
  },
  {
    slug: 'indoor-lighting-installation-in-college-park-ga',
    title: 'Indoor Lighting Installation',
    shortTitle: 'Indoor Lighting',
    icon: 'Lightbulb',
    shortDescription: 'Install recessed lights, chandeliers, under-cabinet lighting, and dimmers.',
    metaTitle: 'Indoor Lighting Installation in College Park, GA | D Best',
    metaDescription: 'Indoor lighting installation in College Park, GA. Recessed lights, chandeliers, and under-cabinet lighting. Call 404-397-9782.',
    heroImage: 'https://images.pexels.com/photos/7518747/pexels-photo-7518747.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroAlt: 'Stylish glass ball light fixtures hanging indoors',
    overview: 'Proper lighting transforms a house into a home. We install all types of indoor lighting fixtures securely and wire them to high-quality switches and dimmers for the perfect ambiance.',
    problems: [
      { title: 'Recessed Lighting Installation', description: 'We install sleek, modern LED recessed can lights to provide clean, even illumination in kitchens, living rooms, and basements.' },
      { title: 'Chandelier and Pendant Light Hanging', description: 'We install heavy-duty, fan-rated ceiling boxes to safely support the weight of large chandeliers and elegant pendant fixtures.' },
      { title: 'Under-Cabinet and Task Lighting', description: 'We install LED under-cabinet lighting to eliminate shadows on your kitchen counters, making food prep easier and safer.' },
      { title: 'Dimmer Switch Integration', description: 'We match your new lighting with LED-compatible dimmer switches so you can adjust brightness without flickering or buzzing.' }
    ],
    gallery: [
      'https://images.pexels.com/photos/7518747/pexels-photo-7518747.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
      'https://images.pexels.com/photos/5691494/pexels-photo-5691494.jpeg?auto=compress&cs=tinysrgb&h=400&w=600'
    ],
    process: [
      { title: 'Lighting Plan', description: 'We discuss fixture types and placement to achieve the look you want.' },
      { title: 'Professional Installation', description: 'We install boxes, run wiring, mount fixtures securely, and connect switches.' },
      { title: 'Adjust and Test', description: 'We test all fixtures, adjust aiming, and verify dimmer functionality.' }
    ],
    faqs: [
      { question: 'Can you install recessed lights in an existing ceiling?', answer: 'Yes. We use remodel cans and route wiring with minimal drywall disruption.' },
      { question: 'Can you hang a heavy chandelier?', answer: 'Yes. We install heavy-duty ceiling boxes to safely support the weight.' }
    ],
    relatedServices: ['outlet-switch-installation-in-college-park-ga', 'ceiling-fan-installation-in-college-park-ga']
  },
  {
    slug: 'outdoor-lighting-installation-in-college-park-ga',
    title: 'Outdoor Lighting Installation',
    shortTitle: 'Outdoor Lighting',
    icon: 'Sun',
    shortDescription: 'Landscape lighting, exterior wall lights, and security lighting installed safely.',
    metaTitle: 'Outdoor Lighting Installation in College Park, GA | D Best',
    metaDescription: 'Outdoor and landscape lighting installation in College Park, GA. Security lights, pathway lights, and exterior fixtures. Call 404-397-9782.',
    heroImage: 'https://images.pexels.com/photos/4933643/pexels-photo-4933643.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroAlt: 'A modern suburban home at dusk beautifully lit with exterior lights',
    overview: 'Enhance your home\'s curb appeal and security after dark. We install weather-rated outdoor lighting systems that endure the elements and provide reliable illumination.',
    problems: [
      { title: 'Security Lighting', description: 'We install bright, motion-activated floodlights and dusk-to-dawn fixtures to deter trespassers and improve visibility around your property.' },
      { title: 'Outdoor Fixture Installation', description: 'We install and replace exterior wall sconces, porch lights, and patio fixtures using properly sealed, weather-rated electrical boxes.' },
      { title: 'Pathway Lighting', description: 'We install low-voltage LED pathway lights to safely illuminate walkways, steps, and driveways, preventing tripping hazards at night.' },
      { title: 'Landscape Lighting', description: 'Highlight your trees, gardens, and architectural features with custom landscape lighting, complete with automated transformers and timers.' },
      { title: 'Exterior Lighting Repairs', description: 'Outdoor wiring is prone to water and physical damage. We troubleshoot and repair broken landscape lights, faulty sensors, and tripped outdoor GFCIs.' }
    ],
    process: [
      { title: 'Plan the Layout', description: 'We walk the property with you and recommend fixture types and placement.' },
      { title: 'Weather-Rated Installation', description: 'We run wiring in conduit where required and ensure GFCI protection.' },
      { title: 'Aim and Test', description: 'We adjust fixture angles, set motion sensor ranges, and program timers.' }
    ],
    faqs: [
      { question: 'Do outdoor outlets need special protection?', answer: 'Yes. They require GFCI protection and weather-resistant covers.' },
      { question: 'Can you install motion-activated security lights?', answer: 'Yes. We install motion-sensor floodlights with adjustable range.' }
    ],
    relatedServices: ['indoor-lighting-installation-in-college-park-ga', 'electrical-safety-inspections-in-college-park-ga']
  },
  {
    slug: 'ceiling-fan-installation-in-college-park-ga',
    title: 'Ceiling Fan Installation',
    shortTitle: 'Ceiling Fans',
    icon: 'Fan',
    shortDescription: 'Ceiling fan installation, replacement, and wiring including fan-rated boxes.',
    metaTitle: 'Ceiling Fan Installation in College Park, GA | D Best',
    metaDescription: 'Ceiling fan installation and replacement in College Park, GA. Fan-rated boxes, switch wiring, and remote controls. Call 404-397-9782.',
    heroImage: 'https://images.pexels.com/photos/6835102/pexels-photo-6835102.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroAlt: 'Bright empty living room with ceiling fan',
    overview: 'A properly installed ceiling fan improves airflow and reduces HVAC costs. Because fans are heavy and vibrate, they require specialized electrical boxes and secure mounting techniques that we provide on every job.',
    problems: [
      { title: 'Ceiling Fan Replacement', description: 'We safely remove your old, wobbly, or noisy fan and install a modern replacement, ensuring the existing mounting hardware is up to standard.' },
      { title: 'New Fan Installation', description: 'Want a fan where there currently isn\'t one? We run new wiring through your ceiling and install a fan safely in the new location.' },
      { title: 'Fan Wiring', description: 'We wire fans and light kits independently, allowing you to control the fan speed and the light brightness from separate wall switches.' },
      { title: 'Fan-Rated Electrical Box', description: 'A standard light box cannot hold a fan. We always install a specialized, braced fan-rated box that securely grips the ceiling joists to prevent falls.' },
      { title: 'Remote-Controlled Fans', description: 'We install receiver modules in the fan canopy so you can operate the fan speed and lights conveniently from a handheld remote.' },
      { title: 'Troubleshooting', description: 'If your fan is wobbling excessively, making grinding noises, or the lights are flickering, we diagnose and repair the electrical or mounting issue.' }
    ],
    process: [
      { title: 'Check the Mounting', description: 'We inspect or install a proper fan-rated box with secure mounting.' },
      { title: 'Wire and Hang', description: 'We assemble the fan, wire it to the box, and secure it to the bracket.' },
      { title: 'Balance and Test', description: 'We check for balance, test all speeds, and ensure there is no wobble.' }
    ],
    faqs: [
      { question: 'Why is my ceiling fan wobbling?', answer: 'Wobbling can be caused by an unbalanced fan, loose blades, or an inadequate ceiling box.' },
      { question: 'Can you wire a fan and light on separate switches?', answer: 'Yes. We wire the motor and light kit independently for dual-switch control.' }
    ],
    relatedServices: ['indoor-lighting-installation-in-college-park-ga', 'electrical-installation-in-college-park-ga']
  },
  {
    slug: 'electrical-safety-inspections-in-college-park-ga',
    title: 'Electrical Safety Inspections and Diagnostics',
    shortTitle: 'Safety Inspections',
    icon: 'ShieldCheck',
    shortDescription: 'Comprehensive electrical safety inspections, testing, and hazard identification.',
    metaTitle: 'Electrical Safety Inspections in College Park, GA | D Best',
    metaDescription: 'Electrical safety inspections in College Park, GA. We thoroughly check panels, wiring, and outlets for safety hazards. Call 404-397-9782.',
    heroImage: 'https://images.pexels.com/photos/10871929/pexels-photo-10871929.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    heroAlt: 'Technician inspecting electrical panels',
    overview: 'Electrical hazards are often hidden behind walls. Our thorough electrical safety inspections give you peace of mind by identifying outdated components, code violations, and fire risks before they cause damage. We believe in transparent, honest reporting.',
    problems: [
      { title: 'Panel and Breakers', description: 'We inspect your main breaker box for proper sizing, secure connections, corrosion, and signs of overheating. We verify that breakers are sized correctly for the wire they protect.' },
      { title: 'Wiring Condition', description: 'We check exposed wiring in attics and basements for degraded insulation, improper splices, and outdated wire types like knob-and-tube or aluminum.' },
      { title: 'Outlets and Switches', description: 'We test a representative sample of receptacles for correct polarity, secure fit, and proper operation to prevent shock hazards.' },
      { title: 'Grounding Verification', description: 'A properly grounded system is essential for safety. We verify that your home\'s main grounding electrode and bonding connections are intact and effective.' },
      { title: 'Visible Hazards', description: 'We look for immediate safety risks such as exposed live wires, overloaded extension cords, and improperly covered junction boxes.' },
      { title: 'Electrical Connections', description: 'Loose connections generate heat and cause fires. We inspect key connection points in the panel and devices to ensure they are torqued correctly.' }
    ],
    process: [
      { title: 'Schedule the Inspection', description: 'We set aside the time needed to thoroughly inspect your electrical system.' },
      { title: 'Thorough Assessment', description: 'We inspect the panel, test outlets, check grounding, and assess visible wiring.' },
      { title: 'Clear Report', description: 'You receive a straightforward summary of what is safe, what to monitor, and what should be fixed.' }
    ],
    faqs: [
      { question: 'How often should I get an electrical safety inspection?', answer: 'Every 5 to 10 years, when buying a home, or before a major renovation.' },
      { question: 'Will you tell me if something needs to be fixed?', answer: 'Yes. You receive a clear report noting what is safe and what should be addressed, with no pressure.' }
    ],
    relatedServices: ['electrical-repairs-troubleshooting-in-college-park-ga', 'electrical-panel-services-in-college-park-ga']
  }
];

// We need to read siteData.ts and replace the `export const services: ServiceData[] = [...]` block with our new array.
const siteDataPath = './src/data/siteData.ts';
let content = fs.readFileSync(siteDataPath, 'utf8');

// Define interface updates
const interfaceReplacement = `export interface ServiceData {
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
  gallery?: string[];
}`;

content = content.replace(/export interface ServiceData \{[\s\S]*?relatedServices: string\[\];\n\}/, interfaceReplacement);

// Stringify our new array with nice formatting
const newServicesStr = "export const services: ServiceData[] = " + JSON.stringify(services, null, 2) + ";";

// Replace the old services block
const servicesRegex = /export const services: ServiceData\[\] = \[[\s\S]*?\];\n\nexport interface ServiceAreaData/m;
content = content.replace(servicesRegex, newServicesStr + '\\n\\nexport interface ServiceAreaData');

fs.writeFileSync(siteDataPath, content);
console.log('Successfully updated siteData.ts with new service data.');
