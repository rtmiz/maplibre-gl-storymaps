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
    inset: false,
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
    title: 'Approach Anonymous',
    subtitle: 'How to cope with airplane noise. An introduction to publicly available aeronautical and meteorological data sources.',
    byline: 'By Gérie',
    footer: 'Created using <a href="https://github.com/opengeos/maplibre-gl-storymaps" target="_blank">MapLibre Storytelling</a> template, inspired by <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a>.',

    // Story chapters
    chapters: [
        {
            id: 'chapter-0',
            alignment: 'left',
            hidden: true,
            showMarker: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [16.381,48.2],
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
            id: 'chapter-1',
            alignment: 'left',
            hidden: false,
            title: 'New home new problems',
            image: '',
            description: 'Favoritenstraße ███/██-██, 1100 Favoriten, Wien',
            // one extra Next plays the flyover clip, then Next again moves on
            popup: './assets/flyover.mp4',
            popupCaption: 'Filmed out the window.',
            location: {
                center: [16.381493160181233, 48.16786091798868],
                zoom: 16.7,
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
            showMarker: true,
            markerLocation: [16.5697, 48.1103], // airport reference point - independent of the camera's framing center below
            title: 'Vienna International Airport',
            image: '',
            description: 'IATA: VIE<br>ICAO: LOWW<br><br>IATA codes are what you would see usually, 3 letter shortened versions of airport names or cities they serve.<br><br>ICAO names are 4 letters internationally standardized. First letter denotes region (L is central/southern Europe including the eastern Mediterranean) second letter denotes country in the region (O for Austria), the last two letters are chosen per airport by the country, for austria the third letter denotes category (W for major airport, X for military and A for smaller airfields), fourth letter denotes the city it is mainly serving (W for Wien)', // IATA (VIE) / ICAO (LOWW) codes
            location: {
                // Flat, rotated to match the chart's own page orientation
                // (~25° off true north), but zoomed out a bit wider than the chart itself
                center: [16.59, 48.10],
                zoom: 12.7,
                pitch: 12,
                bearing: 25.77
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'loww-chart-overlay', opacity: 0, duration: 0 }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-3',
            alignment: 'right',
            hidden: true,
            title: 'The Aerodrome Chart',
            image: '',
            description: '',
            showMarker: false,
            location: {
                // Same rotation/pitch as chapter 2 - just push in closer, to roughly
                // the chart's own real-world footprint, then reveal it draped in place
                center: [16.566103, 48.112286],
                zoom: 13.2,
                pitch: 0,
                bearing: 25.77
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'loww-chart-overlay', opacity: 0.85, duration: 2000 }
            ],
            onChapterExit: [
                { layer: 'loww-chart-overlay', opacity: 0, duration: 1000 }
            ]
        },
        {
            id: 'chapter-4',
            alignment: 'top-right',
            hidden: false,
            title: 'RWY 11 Final Approach',
            image: './assets/loww_ils11_approach_track.png', // cropped to just the plan-view approach track (D-13.0 OEW to LOWW)
            description: 'Final Approaches (or "Finals") are aligned with the runway (flying along what is geometrically called the extended centerline), it officially begins at the "Final Approach Fix" (FAF). How far out exactly that point is depends on the airport, runway and procedure type. The specifics of approaches are detailed in ICAO normed charts published by national agencies.',
            showMarker: false, // camera center here is just framing, not a real place - see the explicit home dot instead
            location: {
                // Pull back to reveal the runway + the extended approach path
                // running from the apartment down to the threshold.
                // padding reserves screen space for the top-right blurb (roughly
                // its 34vw+5vw width and 8vh top offset at a ~1600-1900px wide
                // window) so MapLibre keeps the path clear of it automatically,
                // rather than hand-tuning the center to dodge a fixed panel.
                center: [16.49, 48.15],
                zoom: 11.9,
                pitch: 0,
                bearing: 0,
                padding: { top: 80, right: 325 }
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'rwy11-extended-centerline', opacity: 0.9, duration: 3000 },
                { layer: 'rwy11-runway', opacity: 0.9, duration: 2000 },
                { layer: 'rwy11-thr11-dot', opacity: 1, duration: 3000 },
                { layer: 'rwy11-home-marker', opacity: 1, duration: 3500 },
                // the measurement apparatus is saved for the close-up (chapter 5).
                // set explicitly to 0 rather than just omitted, so stepping back here
                // from chapter 5 clears them again
                { layer: 'rwy11-crosstrack', opacity: 0, duration: 500 },
                { layer: 'rwy11-closest-point', opacity: 0, duration: 500 },
                { layer: 'rwy11-distance-label', opacity: 0, duration: 500 },
                { layer: 'rwy11-crosstrack-label', opacity: 0, duration: 500 }
            ],
            onChapterExit: [
                { layer: 'rwy11-extended-centerline', opacity: 0, duration: 500 },
                { layer: 'rwy11-runway', opacity: 0, duration: 500 },
                { layer: 'rwy11-thr11-dot', opacity: 0, duration: 500 },
                { layer: 'rwy11-home-marker', opacity: 0, duration: 500 }
            ]
        },
        {
            id: 'chapter-5',
            alignment: 'right',
            hidden: false,
            title: 'Closest Point to Home',
            showMarker: false,
            image: '',
            description: '',
            location: {
                // Push in tight on the abeam point - home and the centerline
                // side by side, bearing aligned with the direction of travel
                center: [16.382569, 48.169355],
                zoom: 16,
                pitch: 0,
                bearing: 115.76
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
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
            description: 'Standard GP is 3°, LOWW RWY 11 has 3.1°, all other runways have 3 flat. My first guess was noise, but it turns out the OMV refinery needs a few meters extra clearance.',
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
  <span data-step="7">PROB30 TEMPO 1621/1624 30020G30KT 4000 TSRA FEW040CB SCT050</span></pre>
                <ul>
                    <li data-step="1"><code>151715Z</code> — issued day 15, 17:15 UTC</li>
                    <li data-step="2"><code>1518/1624</code> — valid from day 15 18:00Z to day 16 24:00Z. A 30-hour forecast.</li>
                    <li data-step="3"><code>13005KT CAVOK</code> — the prevailing conditions to start with, same grammar as a METAR</li>
                    <li data-step="4"><code>TX26/1614Z TN12/1604Z</code> — max 26°C at 14:00Z on the 16th, min 12°C at 04:00Z</li>
                    <li data-step="5"><code>BECMG 1610/1612</code> — a <em>permanent</em> change, arriving gradually within that window: wind swinging to 160° at 9kt</li>
                    <li data-step="6"><code>BECMG 1621/1623</code> — and later round to 280° at 12kt. Note what that does to the runway choice.</li>
                    <li data-step="7"><code>PROB30 TEMPO 1621/1624 30020G30KT 4000 TSRA</code> — 30% chance of <em>temporary</em> spells: 20kt gusting 30, visibility down to 4km, thunderstorms with rain, cumulonimbus at 4000ft</li>
                </ul>
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
    ]
};
