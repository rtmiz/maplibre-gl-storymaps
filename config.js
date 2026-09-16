var config = {
    // Map style - use any MapLibre-compatible style URL
    // Free options include:
    // - CartoCDN: https://basemaps.cartocdn.com/gl/positron-gl-style/style.json (light)
    // - CartoCDN: https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json (dark)
    // - CartoCDN: https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json (colorful)
    // - MapTiler (requires free API key): https://api.maptiler.com/maps/streets/style.json?key=YOUR_KEY
    // - OpenFreeMap: https://tiles.openfreemap.org/styles/liberty
    style: 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json',

    // Show markers at the center of each chapter location
    showMarkers: true,
    markerColor: '#3FB1CE',

    // Enable inset minimap
    inset: true,
    insetStyle: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
    insetPosition: 'bottom-right', // Options: 'top-left', 'top-right', 'bottom-left', 'bottom-right'
    insetZoom: 1,
    insetOptions: {
        markerColor: 'orange'
    },

    // Theme for story panels: 'light' or 'dark'
    theme: 'dark',

    // Enable 3D terrain (requires terrain source)
    use3dTerrain: false,
    // For 3D terrain, you can use:
    // - AWS Terrain Tiles: 'https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png'
    // - MapTiler (requires key): 'https://api.maptiler.com/tiles/terrain-rgb/tiles.json?key=YOUR_KEY'
    // terrainSource: 'https://api.maptiler.com/tiles/terrain-rgb/tiles.json?key=YOUR_KEY',
    // terrainExaggeration: 1.5,

    // Auto-advance through chapters
    auto: false,

    // Story metadata
<<<<<<< Updated upstream
    title: 'Your Story Title',
    subtitle: 'A scrollytelling map experience built with MapLibre GL JS',
    byline: 'By Your Name',
    footer: 'Source: Your data sources here. <br> Created using <a href="https://github.com/opengeos/maplibre-gl-storymaps" target="_blank">MapLibre Storytelling</a> template, inspired by <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a>.',
=======
    title: 'Approach Anonymous',
    subtitle: 'How to cope with airplane noise. An introduction to publicly available aeronautical and meteorological data sources.',
    byline: 'By Gérie',
    footer: 'Charts courtesy of Austro Control GmbH, via <a href="https://www.vacc-austria.org/?page=content/chart_overview" target="_blank">VACC Austria</a> — for flight simulation and non-commercial use only.<br>Created using <a href="https://github.com/opengeos/maplibre-gl-storymaps" target="_blank">MapLibre Storytelling</a> template, inspired by <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a>.',
>>>>>>> Stashed changes

    // Story chapters
    chapters: [
        {
            id: 'chapter-1',
            alignment: 'left',
            hidden: false,
            title: 'San Francisco, California',
            image: './assets/san-francisco.jpg',
            description: 'San Francisco, a hilly city on the tip of a peninsula surrounded by the Pacific Ocean and San Francisco Bay, is known for its year-round fog, iconic Golden Gate Bridge, cable cars and colorful Victorian houses. <br><br>The city is also known for its vibrant tech industry, diverse neighborhoods, and rich cultural scene.',
            location: {
                center: [-122.4194, 37.7749],
                zoom: 11,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // Example: show a layer when entering this chapter
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // Example: hide a layer when exiting this chapter
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter-2',
            alignment: 'right',
            hidden: false,
            title: 'New York City, New York',
            image: './assets/new-york.jpg',
            description: 'New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that\'s among the world\'s major commercial, financial and cultural centers. <br><br>Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park.',
            location: {
                center: [-74.0060, 40.7128],
                zoom: 11,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-3',
            alignment: 'left',
            hidden: false,
            title: 'Tokyo, Japan',
            image: './assets/tokyo.jpg',
            description: 'Tokyo, Japan\'s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. <br><br>The Imperial Palace sits amid large public gardens. The city\'s many museums offer exhibits ranging from classical art to a reconstructed kabuki theater.',
            location: {
                center: [139.6917, 35.6895],
                zoom: 10,
                pitch: 30,
                bearing: 20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-4',
            alignment: 'center',
            hidden: false,
<<<<<<< Updated upstream
            title: 'Sydney, Australia',
            image: './assets/sydney.jpg',
            description: 'Sydney, capital of New South Wales and one of Australia\'s largest cities, is best known for its harbourfront Sydney Opera House, with a distinctive sail-like design. <br><br>Massive Darling Harbour and the smaller Circular Quay port are hubs of waterside life, with the arched Harbour Bridge and esteemed Royal Botanic Garden nearby.',
=======
            title: 'RWY 11 Final Approach',
            image: './assets/loww_ils11_approach_track.png', // cropped to just the plan-view approach track (D-13.0 OEW to LOWW)
            description: 'Final Approaches (or "Finals") are aligned with the runway (flying along what is geometrically called the extended centerline), it officially begins at the "Final Approach Fix" (FAF). How far out exactly that point is depends on the airport, runway and procedure type. The specifics of approaches are detailed in ICAO normed charts published by national agencies.<span class="src">Chart: Austro Control, via VACC Austria — vacc-austria.org/?page=content/chart_overview</span>',
            showMarker: false, // camera center here is just framing, not a real place - see the explicit home dot instead
>>>>>>> Stashed changes
            location: {
                center: [151.2093, -33.8688],
                zoom: 11,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-5',
            alignment: 'fully',
            hidden: false,
            title: 'Cape Town, South Africa',
            image: './assets/cape-town.jpg',
            description: 'Cape Town is a port city on South Africa\'s southwest coast, on a peninsula beneath the imposing Table Mountain. Slowly rotating cable cars climb to the mountain\'s flat top, from which there are sweeping views of the city, the busy harbor and boats headed for Robben Island, the infamous prison that once held Nelson Mandela. <br><br>You can add as many chapters as you need to tell your story.',
            location: {
                center: [18.4241, -33.9249],
                zoom: 10,
                pitch: 50,
                bearing: 30
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
<<<<<<< Updated upstream
            onChapterEnter: [],
            onChapterExit: []
        }
=======
            onChapterEnter: [
                { layer: 'rwy11-extended-centerline', opacity: 0.9, duration: 2000 },
                { layer: 'rwy11-crosstrack', opacity: 0.9, duration: 2000 },
                { layer: 'rwy11-closest-point', opacity: 1, duration: 2000 },
                { layer: 'rwy11-home-marker', opacity: 1, duration: 2000 },
                { layer: 'rwy11-distance-label', opacity: 1, duration: 2000 },
                { layer: 'rwy11-crosstrack-label', opacity: 1, duration: 2000 }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-6',
            alignment: 'right',
            hidden: false,
            title: 'The Glidepath',
            image: './assets/loww_ils11_profile.png', // official ILS/LOC RWY11 approach chart (GP 3.1°)
            description: 'Standard GP is 3°, LOWW RWY 11 has 3.1°, all other runways have 3 flat. My first guess was noise, but it turns out the OMV refinery needs a few meters extra clearance.<span class="src">Chart: Austro Control, via VACC Austria — vacc-austria.org/?page=content/chart_overview</span>',
            // one extra Next on this chapter overlays the answer, then Next again moves on
            popup: './assets/pilot_omv_answer.png',
            popupCaption: 'Asked a pilot.',
            showMarker: false,
            location: {
                // Flip the pitch - now looking along the 3.1° ILS glidepath in
                // pseudo-3D, extruded to true scale (real meters of altitude)
                center: [16.54, 48.15],
                zoom: 12,
                pitch: 68,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'glideslope-wall', opacity: 0.75, duration: 3000 }
            ],
            onChapterExit: [
                { layer: 'glideslope-wall', opacity: 0, duration: 500 }
            ]
        },
        {
            id: 'chapter-7',
            alignment: 'right-large',
            hidden: false,
            title: 'Altitude at the closest point',
            image: '', // cropped to the GP 3.1° profile + distance-to-THR11 scale (NM)
            description: `Aircraft measure height primarily using Barometric Pressure Altitude, which is different from geometric altitude measured by GPS. This measures air pressure against a set standard and converts it to altitude displayed in feet. ADS-B reports this altitude in feet directly. <br><br> Planes are equipped with 3 modi for altimeters:<ul>
            <li><b>QNE</b> — the <b>standard setting: 1013.25 hPa / 29.92 inHg</b>.</li>
            <li><b>QNH</b> — set this and the altimeter reads <b>altitude above mean sea level</b>.</li>
            <li><b>QFE</b> — set this and the altimeter reads <b>zero on the runway</b>, i.e. height above the aerodrome itself.</li>
            </ul>`,
            showMarker: false,
            location: {
                // Same pitch/bearing as the glideslope chapter - just push in on
                // the intercept point itself rather than the whole 45km wall
                center: [16.395, 48.176],
                zoom: 14.5,
                pitch: 68,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'glideslope-wall', opacity: 0.75, duration: 2000 },
                { layer: 'glideslope-intercept-pillar', opacity: 0.9, duration: 2000 },
                { layer: 'glideslope-intercept-label', opacity: 1, duration: 2000 },
                { layer: 'rwy11-distance-label', opacity: 0, duration: 500 }
            ],
            onChapterExit: [
                { layer: 'glideslope-intercept-pillar', opacity: 0, duration: 500 },
                { layer: 'glideslope-intercept-label', opacity: 0, duration: 500 },
                { layer: 'rwy11-distance-label', opacity: 1, duration: 500 }
            ]
        },
        {
            id: 'chapter-8',
            alignment: 'right-large',
            hidden: false,
            title: 'Noise Complaints',
            image: '',
            description: 'With the vertical and horizontal distances we can now calculate that the real euclidean distance is around 762.5m.<br>Naively calculating the loudness of a jet engine this far away comes down from 150dB at 1-30m distance to around 92-122dB, using standardized ICAO approach-noise certification data, you would end up at around 98-109dB instead. Disregarding inaccuracy, subjectively, it is still LOUD!',
            showMarker: false,
            location: {
                // Same camera as chapter 7 - this just adds the slant-range line on top
                center: [16.395, 48.176],
                zoom: 14.5,
                pitch: 68,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'glideslope-wall', opacity: 0.75, duration: 500 },
                { layer: 'glideslope-intercept-pillar', opacity: 0.9, duration: 500 },
                { layer: 'glideslope-intercept-label', opacity: 1, duration: 500 },
                { layer: 'glideslope-home-slant-line', opacity: 0.9, duration: 2500 },
                { layer: 'glideslope-home-slant-label', opacity: 1, duration: 2500 },
                // the horizontal leg of the euclidean calculation - ask for it
                // explicitly rather than relying on it carrying over from chapter 5
                { layer: 'rwy11-crosstrack', opacity: 0.9, duration: 500 },
                { layer: 'rwy11-crosstrack-label', opacity: 1, duration: 500 },
                { layer: 'rwy11-home-marker', opacity: 1, duration: 500 },
                // chapter-7's exit re-shows this when leaving it forward into this
                // chapter too, since exit doesn't know direction - re-hide it here
                { layer: 'rwy11-distance-label', opacity: 0, duration: 0 }
            ],
            onChapterExit: [
                { layer: 'glideslope-home-slant-line', opacity: 0, duration: 500 },
                { layer: 'glideslope-home-slant-label', opacity: 0, duration: 500 }
            ]
        },
        {
            id: 'chapter-9',
            alignment: 'right',
            hidden: false,
            title: 'Why me?',
            image: '',
            description: 'Which runway gets chosen for incoming traffic mostly depends on the direction of the wind.<br>Planes want to land into a headwind as that allows for higher airspeed relative to groundspeed, more deceleration and shorter runways. So for runway 11 an easterly wind (winds are described by the direction their of origin) would be favourable.<br><br>METAR reports wind as dddssKT - three digits of direction, two of speed. 11015KT means "from 110° at 15 knots". Direction is rounded to the nearest 10°, gusts get appended with G (11015G27KT), 00000KT is calm and VRB marks a variable direction.<br><br> METAR always reports wind direction relative to true north, as opposed to runway numberings and the wind ATC gives out, which relies on magnetic north. That could be up to a 5° difference in Vienna. <br><br>Besides METAR there is also TAF, which includes prognoses of future weather conditions.',
            showMarker: false,
            location: {
                // Wide, flat, north-up: all four landing directions at once, so the
                // four approach arrows read against the compass.
                // padding reserves room for the right-hand blurb (same approach as
                // chapter 4), shifting the arrows left clear of it
                center: [16.569583, 48.110069],
                zoom: 10.6,
                pitch: 0,
                bearing: 0,
                padding: { right: 300 }
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'approach-arrow-shafts', opacity: 0.9, duration: 2000 },
                { layer: 'approach-arrow-heads', opacity: 0.9, duration: 2000 },
                { layer: 'approach-arrow-labels', opacity: 1, duration: 2000 },
                // clear the glideslope build-up from chapters 6-8
                { layer: 'glideslope-wall', opacity: 0, duration: 500 },
                { layer: 'glideslope-intercept-pillar', opacity: 0, duration: 500 },
                { layer: 'glideslope-intercept-label', opacity: 0, duration: 500 },
                { layer: 'glideslope-home-slant-line', opacity: 0, duration: 500 },
                { layer: 'glideslope-home-slant-label', opacity: 0, duration: 500 },
                // and the RWY11-specific / home-distance elements carried over from
                // chapter 5, which left them on deliberately for chapters 6-8
                { layer: 'rwy11-extended-centerline', opacity: 0, duration: 500 },
                { layer: 'rwy11-runway', opacity: 0, duration: 500 },
                { layer: 'rwy11-thr11-dot', opacity: 0, duration: 500 },
                { layer: 'rwy11-crosstrack', opacity: 0, duration: 500 },
                { layer: 'rwy11-crosstrack-label', opacity: 0, duration: 500 },
                { layer: 'rwy11-closest-point', opacity: 0, duration: 500 },
                { layer: 'rwy11-home-marker', opacity: 0, duration: 500 },
                { layer: 'rwy11-distance-label', opacity: 0, duration: 500 }
            ],
            onChapterExit: [
                { layer: 'approach-arrow-shafts', opacity: 0, duration: 500 },
                { layer: 'approach-arrow-heads', opacity: 0, duration: 500 },
                { layer: 'approach-arrow-labels', opacity: 0, duration: 500 }
            ]
        },
        {
            // Full-screen slide mode: `slide: true` + HTML in `content`. No `location`
            // needed - the camera doesn't move and the map is covered.
            // Tag matching pairs with the same data-step and Next accents each in turn;
            // the step count is inferred from the highest data-step, so pairs can be
            // added or removed freely without updating anything else.
            id: 'chapter-11',
            slide: true,
            title: 'Reading a METAR',
            content: `
                <p>LOWW publishes a routine observation roughly every half hour. Here is a real one:</p>
                <pre>METAR LOWW <span data-step="1">151920Z</span> <span data-step="2">14003KT</span> <span data-step="3">CAVOK</span> <span data-step="4">18/13</span> <span data-step="5">Q1019</span> <span data-step="6">NOSIG</span></pre>
                <ul>
                    <li data-step="1"><code>151920Z</code> — day 15 of the month, 19:20 UTC ("Zulu")</li>
                    <li data-step="2"><code>14003KT</code> — wind from 140° true at 3 knots</li>
                    <li data-step="3"><code>CAVOK</code> — "ceiling and visibility OK": no cloud below 5000ft, 10km+ visibility, no significant weather</li>
                    <li data-step="4"><code>18/13</code> — temperature 18°C, dewpoint 13°C</li>
                    <li data-step="5"><code>Q1019</code> — QNH 1019 hPa</li>
                    <li data-step="6"><code>NOSIG</code> — no significant change expected in the next 2 hours</li>
                </ul>
                <h3 class="source-heading">Where to get it</h3>
<pre class="source"><b>https://aviationweather.gov/api/data/metar?ids=LOWW&amp;format=json</b>
<span class="alt">https://tgftp.nws.noaa.gov/data/observations/metar/stations/LOWW.TXT</span></pre>
                <p class="source-note">NOAA / US National Weather Service. <code>format=</code> takes json, raw, xml or html.</p>
            `,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-12',
            slide: true,
            title: 'Reading a TAF',
            // Same airport, same moment - a METAR says what IS, a TAF says what WILL BE.
            content: `
                <p>A forecast rather than an observation, reissued every few hours and only mentioning <em>significant</em> changes:</p>
<pre>TAF LOWW <span data-step="1">151715Z</span> <span data-step="2">1518/1624</span> <span data-step="3">13005KT CAVOK</span>
  <span data-step="4">TX26/1614Z TN12/1604Z</span>
  <span data-step="5">BECMG 1610/1612 16009KT</span>
  <span data-step="6">BECMG 1621/1623 28012KT</span>
  <span data-step="7">PROB30 TEMPO 1621/1624</span> <span data-step="8">30020G30KT</span> <span data-step="9">4000</span> <span data-step="10">TSRA</span> <span data-step="11">FEW040CB SCT050</span></pre>
                <ul>
                    <li data-step="1"><code>151715Z</code> — issued day 15, 17:15 UTC</li>
                    <li data-step="2"><code>1518/1624</code> — valid from day 15 18:00Z to day 16 24:00Z. A 30-hour forecast.</li>
                    <li data-step="3"><code>13005KT CAVOK</code> — the current conditions, same as a METAR</li>
                    <li data-step="4"><code>TX26/1614Z TN12/1604Z</code> — max 26°C at 14:00Z on the 16th, min 12°C at 04:00Z</li>
                    <li data-step="5"><code>BECMG 1610/1612 16009KT</code> — Wind swings from 130° round to 160°, and picks up from 5 to 9 knots.</li>
                    <li data-step="6"><code>BECMG 1621/1623 28012KT</code> — and later to 280° at 12 knots. That is a swing of 120°</li>
                    <li data-step="7"><code>PROB30 TEMPO 1621/1624</code> — a 30% chance of <em>temporary</em> spells between 21:00Z and 24:00Z on the 16th. TEMPO means brief: under an hour at a time, and less than half the window in total.</li>
                    <li data-step="8"><code>30020G30KT</code> — wind from bearing 300° at 20 knots, gusting 30.</li>
                    <li data-step="9"><code>4000</code> — visibility, in <em>metres</em>: down to 4 km, no longer CAVOK.</li>
                    <li data-step="10"><code>TSRA</code> — weather-phenomena, built from two-letter codes: <code>TS</code> thunderstorm + <code>RA</code> rain.</li>
                    <li data-step="11"><code>FEW040CB</code> and <code>SCT050</code> — cloud coverage. Amount in eighths of sky (<code>FEW</code> 1–2, <code>SCT</code> 3–4, <code>BKN</code> 5–7, <code>OVC</code> 8), then height in hundreds of feet <em>above the aerodrome</em>. So: a little cumulonimbus at 4000ft, and scattered cloud at 5000ft. <code>CB</code> and <code>TCU</code> are the only types ever named, because they are the ones that mean turbulence.</li>
                </ul>
                <h3 class="source-heading">Where to get it</h3>
<pre class="source"><b>https://aviationweather.gov/api/data/taf?ids=LOWW&amp;format=raw</b>
<span class="alt">https://tgftp.nws.noaa.gov/data/forecasts/taf/stations/LOWW.TXT</span></pre>
                <p class="source-note">Same NOAA service as the METAR.</p>
            `,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-10',
            alignment: 'right',
            hidden: false,
            title: 'Which Planes?',
            image: '',
            description: 'To know which planes (type, callsign, etc.) are actually flying where you can use ADS-B.<br><br> ADS-B (Automatic Dependent Surveillance - Broadcast) is an unencrypted broadcast of flight data, which is broadcast by planes (and rarely ground vehicles) themselves. If you have a receiver, you can pick this up (given you have a clean sightline to a plane).',
            showMarker: false,
            location: {
                // Back down to the apartment, pitched so there's sky above the roof
                // for the question mark to sit in; padding keeps it clear of the blurb
                center: [16.381493, 48.167861],
                zoom: 16,
                pitch: 60,
                bearing: 0,
                padding: { right: 300 }
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'rwy11-home-marker', opacity: 1, duration: 1500 },
                { layer: 'home-question-mark', opacity: 1, duration: 2000 }
            ],
            onChapterExit: [
                { layer: 'rwy11-home-marker', opacity: 0, duration: 500 },
                { layer: 'home-question-mark', opacity: 0, duration: 500 }
            ]
        },
        {
            id: 'chapter-13',
            slide: true,
            title: 'Reading an ADS-B report',
            // Real aircraft, pulled live from api.adsb.lol - a Ryanair A320 on
            // descent into LOWW. Fields shown as the aggregator returns them.
            content: `
                <p>One aircraft, self-reporting, ~2x per second on 1090 MHz. Here it is as JSON:</p>
<pre>{
  "hex": <span data-step="1">"4d22ae"</span>,   "flight": <span data-step="2">"RYR3EN"</span>,
  "alt_baro": <span data-step="3">7375</span>,  "baro_rate": <span data-step="4">-832</span>,
  "lat": <span data-step="5">47.974274</span>, "lon": <span data-step="5">16.479698</span>,
  "gs": <span data-step="6">298.7</span>,      "track": <span data-step="6">26.22</span>,
  "squawk": <span data-step="7">"1000"</span>,
  "r": <span data-step="8">"9H-LMH"</span>,    "t": <span data-step="8">"A320"</span>
}</pre>
                <ul>
                    <li data-step="1"><code>hex</code> — the ICAO 24-bit address, burned into the transponder. Unique per plane, used as a lookup for type and registration.</li>
                    <li data-step="2"><code>flight</code> — the callsign the crew typed in, i.e. the flight number.</li>
                    <li data-step="3"><code>alt_baro</code> — barometric altitude in feet, against the 1013.25 hPa standard, exactly as we saw earlier.</li>
                    <li data-step="4"><code>baro_rate</code> — vertical rate in ft/min</li>
                    <li data-step="5"><code>lat</code> / <code>lon</code> — position from GNSS. </li>
                    <li data-step="6"><code>gs</code> / <code>track</code> — ground speed in knots and track in degrees <em>true</em> (not magnetic).</li>
                    <li data-step="7"><code>squawk</code> — the old Mode A code. <code>1000</code> means "identified by Mode S address instead".</li>
                    <li data-step="8"><code>r</code> / <code>t</code> — registration and type are not broadcast. Aggregators looks them up from the hex.</li>
                </ul>
                <h3 class="source-heading">Where to get it</h3>
<pre class="source"><b>https://opendata.adsb.fi/api/v2/lat/48.1679/lon/16.3815/dist/25</b>
<span class="alt">https://api.adsb.lol/v2/lat/48.1679/lon/16.3815/dist/25
https://opensky-network.org/api/states/all?lamin=47.9&amp;lomin=16.0&amp;lamax=48.4&amp;lomax=16.8</span></pre>
                <p class="source-note">No official public feed exists for ADS-B: these are community receiver networks (adsb.lol, adsb.fi) and an academic one (OpenSky). An RTL-SDR dongle running dump1090 would function the same locally.</p>
            `,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-14',
            alignment: 'right',
            hidden: false,
            title: 'Thanks!',
            image: './assets/doohickey.jpg',
            description: 'The doohickey',
            location: {
                // Sentry Vienna, Jakov-Lind-Straße 5 (Austria Campus) - tagged as
                // "Sentry" in OpenStreetMap, so this is the building itself
                center: [16.392152, 48.223300],
                zoom: 16.4,
                pitch: 55,
                bearing: 0,
                // shift the building left, clear of the right-hand banner
                padding: { right: 300 }
            },
            mapAnimation: 'flyTo',
            // built-in: sweeps 180° over 30s once the camera settles
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // nothing from the approach story should still be on screen here
                { layer: 'home-question-mark', opacity: 0, duration: 500 },
                { layer: 'rwy11-home-marker', opacity: 0, duration: 500 }
            ],
            onChapterExit: []
        },
>>>>>>> Stashed changes
    ]
};
