const allIpsums: string[] = [
  `The cat curled up by the window.`,
  `Turn left at the traffic light ahead.`,
  `Mix flour, sugar, and eggs in a bowl.`,
  `He glanced at the clock nervously.`,
  `Rain is expected late in the afternoon.`,
  `The museum opens at 9:00 AM and offers free admission every first Sunday of the month. Visitors are encouraged to arrive early to avoid long lines.`,
  `She couldn’t believe her eyes. The envelope contained a single, handwritten letter—something she hadn’t seen in years.`,
  `To set up the device, plug it into a power outlet and connect it to your Wi-Fi network using the app. The indicator light will turn green once it's ready.`,
  `In 1969, humans landed on the Moon for the first time. This monumental achievement required years of research, dedication, and collaboration.`,
  `Place the book back on the shelf when you're finished. If you need assistance, a librarian will be happy to help.`,
  `The sky was painted in hues of orange and pink as the sun dipped below the horizon. Emma pulled her scarf tighter around her neck, bracing against the cool breeze. The streets were quiet now, save for the distant hum of traffic.

She paused in front of the little bakery on Elm Street, its windows glowing warmly. Inside, the scent of fresh bread and pastries filled the air. It reminded her of simpler times, when Sunday mornings meant croissants and laughter at the kitchen table.

As she walked away, a thought lingered: some places never lose their magic. They remain untouched by time, preserving memories like treasures hidden in plain sight.`,
  `The train rolled into the station with a screech of metal against metal. Travelers bustled about, their footsteps echoing against the tiled floor. In the chaos, he felt strangely calm, as if the world had slowed down for just a moment.

The journey ahead was long, winding through mountains and along rivers that sparkled in the afternoon sun. He had read about these landscapes in books but seeing them in person was different—surreal, almost dreamlike.

When the train crossed the bridge, he leaned closer to the window, mesmerized by the expanse of water below. The reflection of clouds on the surface looked like an artist's masterpiece, ever-changing with the breeze.

At the next stop, a group of hikers boarded, their backpacks stuffed with supplies. They spoke excitedly about the trails ahead, their energy contagious. He found himself smiling, imagining the adventures they would have.

As the train pressed on, the scenery shifted to rolling hills dotted with tiny villages. Each house seemed to have a story, its own history etched into the walls. He realized then that travel wasn't just about the destination—it was about the moments in between.`,
  `Gardening is both an art and a science, blending creativity with knowledge of nature. At its core, it’s about cultivating plants to create a harmonious space. Whether you're growing vegetables or tending to flowers, the process is deeply rewarding.

To start, it's essential to understand your soil. Is it sandy, clay-rich, or loamy? Each type has unique characteristics that affect plant growth. Testing your soil’s pH levels can also help determine which plants will thrive.

Light is another crucial factor. Most plants need at least six hours of sunlight daily, but some, like ferns, prefer shade. Observing your garden at different times of day will help you plan effectively.

Watering techniques can make or break your efforts. Overwatering is a common mistake, leading to root rot. A good rule of thumb is to water deeply but less frequently, encouraging roots to grow deeper.

Fertilizers can give plants a much-needed boost, but they should be used judiciously. Organic options, like compost, enrich the soil without harmful chemicals. Synthetic fertilizers, while effective, require careful measurement to avoid overuse.

Pest control is another challenge. Beneficial insects, like ladybugs, can help manage harmful pests naturally. If you opt for pesticides, choose ones that are eco-friendly and safe for pollinators.

As your garden grows, regular maintenance is key. Pruning promotes healthy growth, while weeding prevents competition for nutrients. Mulching can also help retain moisture and suppress weeds.

Gardening isn't just about aesthetics—it has practical benefits too. Growing your own vegetables reduces reliance on store-bought produce and ensures you know exactly what you're eating.

Beyond the physical benefits, gardening offers mental health advantages. Spending time outdoors reduces stress and fosters a sense of accomplishment.

In the end, a garden is more than just a collection of plants. It’s a reflection of care, patience, and a connection to the earth. Whether you're a novice or a seasoned gardener, every step you take nurtures both the land and your soul.`,
  "Keys left on the table again.",
  "Traffic was light this morning.",
  "Did you hear the latest update?",
  "The room smelled faintly of lavender.",
  "Turn off the lights when you leave.",
  "Coffee is brewing, and the morning feels unusually quiet.",
  "The results should be ready by noon; let’s reconvene then.",
  "He folded the map and looked out at the empty road ahead.",
  "Please wait while we process your request. This may take a few moments.",
  "Rain pattered against the windows as she finished her last page.",
  `The conference will open with a keynote address by Dr. Samantha Carter at 9:00 AM. Following the presentation, attendees can choose from a variety of breakout sessions focusing on industry trends and innovations. Lunch will be served in the main hall at noon.`,
  `A cold wind swept through the narrow alley, carrying with it the faint scent of seawater. Marcus tightened his coat and glanced at his watch. He was early—too early. The package wouldn’t arrive for another hour, but something told him to stay alert.`,
  `To assemble the bookshelf, start by organizing all the parts and tools. Attach the side panels to the base using screws, ensuring they are aligned properly. Secure the back panel last for stability.`,
  `The city’s historic district is a must-see, offering cobblestone streets, quaint cafes, and centuries-old architecture. Don’t miss the clock tower, which provides panoramic views of the skyline.`,
  `Children laughed and played in the park as the sun dipped lower in the sky. A dog chased after a frisbee while its owner cheered from the sidelines.`,
  `This month, we’re excited to announce the launch of our new mentorship program, designed to connect seasoned professionals with aspiring individuals in their fields. Applications are now open, and we encourage anyone interested to apply before the deadline.
The program will include monthly workshops, one-on-one sessions, and access to a vast library of resources. Our goal is to foster growth and build lasting relationships within the community.

If you’d like to get involved, visit our website for more details. We look forward to building something great together!`,
  `The forest was alive with the sound of rustling leaves and distant bird calls. Sunlight filtered through the canopy, casting dappled patterns on the ground. She walked carefully, her boots crunching against fallen twigs.
As she reached the clearing, a soft breeze carried the scent of wildflowers. In the center stood a lone oak tree, its branches stretching wide as if embracing the sky. It felt like a place untouched by time.`,
  `Photosynthesis is a process used by plants to convert light energy into chemical energy. This energy is stored in the form of glucose, which serves as fuel for growth and development.
The process begins when chlorophyll absorbs sunlight. Water from the soil and carbon dioxide from the air combine, producing oxygen as a byproduct. This intricate system not only sustains plant life but also supports the planet’s ecosystems.`,
  `The journey began at dawn, with a faint orange glow spreading across the horizon. The air was crisp, carrying the scent of wet earth as we packed our gear into the car. Ahead lay a winding road through dense forests and open plains.
By mid-morning, we reached the first stop—a quiet village nestled in the hills. Locals were setting up stalls for the market, selling everything from fresh produce to handmade crafts. We grabbed a quick snack before continuing our journey.

The landscape changed dramatically as we entered the mountains. Sheer cliffs rose on either side of the road, and waterfalls cascaded down like ribbons of silver. Each turn revealed a new vista more breathtaking than the last.

In the late afternoon, we arrived at our destination: a secluded cabin overlooking a serene lake. The water mirrored the surrounding trees and sky, creating an almost surreal scene. It was the perfect place to unwind after a long drive.

As the sun set, we gathered around a small fire, sharing stories and laughter. The stars above seemed brighter than ever, untouched by city lights. It was a day to remember—a reminder of the beauty that lies in the journey, not just the destination.`,
  `The dog barked at the mail truck.`,
  `Check the schedule for next week.`,
  `The stars were barely visible tonight.`,
  `Don't forget to bring your ID badge.`,
  `They walked quietly through the museum.`,
  `The meeting is set for 3:00 PM in the conference room on the second floor.`,
  `He opened the book and traced his fingers over the faded ink of an old map.`,
  `A light drizzle fell as commuters hurried toward the subway entrance.`,
  `Ingredients should be at room temperature before you begin mixing them together.`,
  `Turn right after the gas station; it's the third house on the left.`,
  `For the perfect scrambled eggs, start by whisking them in a bowl with a splash of milk and a pinch of salt. Heat a non-stick pan over medium-low heat, adding a pat of butter. Once the butter melts, pour in the eggs and stir gently until they are soft and fluffy.`,
  `She stood at the edge of the cliff, the wind tugging at her hair. Below, the ocean churned and roared, waves crashing against jagged rocks. Despite the chaos below, she felt an odd sense of calm, as though the storm reflected her own thoughts.`,
  `The café was tucked away on a quiet side street, its sign barely visible among the ivy-covered walls. Inside, the aroma of freshly brewed coffee mingled with the sweet scent of pastries. It was the kind of place you'd stumble upon by accident and remember forever.`,
  `If your device isn't responding, try restarting it by holding down the power button for 10 seconds. If that doesn't resolve the issue, check for any pending updates in the settings menu. Updates often include fixes for common bugs.`,
  `Sometimes, the smallest moments stick with you. A smile from a stranger, a quiet walk in the park, or the sound of rain on the window—each leaves an imprint that lingers long after the day has passed.`,
  `The library was silent except for the faint rustling of pages. Rows upon rows of books stretched into the dimly lit aisles, their spines weathered with age. In the far corner, a lone figure sat hunched over a desk, scribbling notes into a leather-bound journal.

Outside, the rain fell steadily, tapping against the tall arched windows. It was the perfect setting for losing oneself in a story, and she had been here for hours. Each book she pulled from the shelves seemed to carry its own secrets, waiting to be uncovered.

As the clock chimed in the distance, she glanced up. Time had slipped away again, but she didn't mind. The world outside could wait.`,
  `Setting up your new home Wi-Fi is simple and takes just a few minutes. Start by connecting the modem to the router using the provided Ethernet cable. Then, plug both devices into a power outlet and switch them on.

Wait until the indicator lights on the router turn green, signaling it's ready to connect. Open your device's Wi-Fi settings and look for the network name listed on the router label. Enter the password provided to complete the setup.

For additional security, it's recommended to change the default network name and password. This can be done through the router's admin panel, accessible via a web browser.`,
  `Autumn has a way of transforming the world into a living canvas. Leaves shift from vibrant greens to deep reds, burnt oranges, and golden yellows. The air turns crisp, carrying the earthy aroma of fallen leaves and distant woodsmoke.

Walks through the forest become journeys through a kaleidoscope of color. Every step kicks up a crunch, and sunlight filters through the thinning canopy, creating patterns that dance on the ground.

Animals sense the change too. Squirrels scurry to gather acorns, while birds prepare for their long migrations south. The whole ecosystem seems to buzz with quiet urgency, as though it knows the first frost isn't far away.

For people, autumn brings its own traditions. Apple picking, pumpkin carving, and sipping warm cider by the fire are staples of the season. There's a sense of nostalgia in the air, a gentle reminder of the passage of time.

Yet, it's also a season of preparation. Gardens are cleared, gutters cleaned, and windows sealed against the coming cold. In its beauty, autumn carries an undertone of practicality—nature's reminder that winter is on its way.

As the days grow shorter and nights longer, we're reminded to slow down. It's a time for reflection, for gathering close to loved ones, and for finding beauty in the inevitable cycles of change.`,
];

export default allIpsums;
