/* ==========================================================================
   RAMANAGARA RAILWAY JUNCTION SMART NAVIGATION SYSTEM
   Multilingual, Accessible, Interactive 2D Indoor Railway Station Navigation Engine
   Features: 2D Blueprint SVG Map, Blueprint-Grounded Graph Pathfinding, Dijkstra Algorithm,
             Step-Free Wheelchair Routing, Staff Portal REST Sync, & Voice TTS
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. MULTILINGUAL TRANSLATION DICTIONARY (EN, KN, HI)
// --------------------------------------------------------------------------
const i18n = {
  en: {
    appTitle: "Ramanagara Junction Smart Navigation",
    appSubtitle: "Ramanagara Junction (RMGM) • Indian Railways",
    disclaimerBadge: "DEMO PROTOTYPE",
    disclaimerText: "Blueprint-aligned station guide for Ramanagara Junction. Platform & facility layout verified.",
    tabHome: "Home",
    tabMap: "Navigation & Map",
    tabFacilities: "Nearby Facilities",
    tabHelp: "Staff Assistance",
    welcomeHeading: "Welcome to Ramanagara Junction Smart Navigation",
    heroDesc: "An accessible indoor navigation portal helping all passengers—including users with physical, visual, or hearing disabilities—navigate between Platforms 1, 2, 3, 4, concourses, ticket counters, and station facilities at Ramanagara Junction.",
    btnStartNav: "Start Navigation",
    btnFacilities: "Find Nearby Facilities",
    btnAssistance: "Get Staff Assistance",
    assistanceModesTitle: "Choose Assistance Mode",
    assistanceModesSub: "Tailor directions to your specific mobility or sensory preference.",
    modeGeneralTitle: "General Passenger Mode",
    modeGeneralDesc: "Standard 2D indoor station map, route highlighting, estimated walk times, and step-by-step guidance.",
    modeWheelchairTitle: "Wheelchair Accessible",
    modeWheelchairDesc: "Step-free routes using verified ramps and elevators. Automatically avoids all stairs.",
    modeVisualTitle: "Visual Assistance Mode",
    modeVisualDesc: "Screen-reader optimized, high contrast, Web Speech voice navigation, large touch controls, and spoken updates.",
    modeHearingTitle: "Hearing Assistance Mode",
    modeHearingDesc: "Visual-first step directions, high visibility alerts, visual cues, and silent staff request triggers.",
    routeFinderTitle: "Interactive 2D Station Map & Route Finder",
    reportBlockageBtn: "Report Blockage",
    labelStartPoint: "Starting Point (Current Location)",
    labelDestPoint: "Destination",
    locateMe: "Locate Me (GPS)",
    wheelchairOpt: "Wheelchair Accessible Route (Lifts & Ramps only)",
    noStairsOpt: "Avoid Stairs (No stair climbing)",
    btnFindRoute: "Find Route",
    routeDirectionsTitle: "Route Directions",
    speakInstruction: "Speak Instruction",
    readDestination: "Read Destination",
    noRouteTitle: "No Route Selected",
    noRouteDesc: "Select a starting point and destination above, then click 'Find Route' to calculate step-by-step directions.",
    prevStep: "Previous Step",
    nextStep: "Next Step",
    startNavAction: "Start Navigation",
    cancelNavAction: "Cancel Navigation",
    facilitiesHeading: "Station Facilities & Amenities",
    facilitiesSub: "Browse verified amenities across Ramanagara Junction. Select any facility to navigate directly to it.",
    searchPlaceholder: "Search facilities (e.g., Washroom, Water, Ticket)...",
    helpHeading: "Request Passenger Assistance",
    helpFormDesc: "Passengers requiring wheelchair escort, visual assistance, or general station support can request immediate help here.",
    submitHelpReq: "Submit Assistance Request",
    navigateHere: "Navigate Here"
  },
  kn: {
    appTitle: "ರಾಮನಗರ ಜಂಕ್ಷನ್ ಸ್ಮಾರ್ಟ್ ನ್ಯಾವಿಗೇಷನ್",
    appSubtitle: "ರಾಮನಗರ ಜಂಕ್ಷನ್ (RMGM) • ಭಾರತೀಯ ರೈಲ್ವೆ",
    disclaimerBadge: "ಡೆಮೊ ಮಾದರಿ",
    disclaimerText: "ರಾಮನಗರ ಜಂಕ್ಷನ್‌ ನಕ್ಷೆ ಆಧಾರಿತ ನಿಲ್ದಾಣದ ಮಾರ್ಗದರ್ಶಕ ವ್ಯವಸ್ಥೆ.",
    tabHome: "ಮುಖ್ಯ ಪುಟ",
    tabMap: "ನ್ಯಾವಿಗೇಷನ್ ಮತ್ತು ನಕ್ಷೆ",
    tabFacilities: "ಸೌಲಭ್ಯಗಳು",
    tabHelp: "ಸಿಬ್ಬಂದಿ ನೆರವು",
    welcomeHeading: "ರಾಮನಗರ ಜಂಕ್ಷನ್ ಸ್ಮಾರ್ಟ್ ನ್ಯಾವಿಗೇಷನ್‌ನಿಗೆ ಸುಸ್ವಾಗತ",
    heroDesc: "ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ 1, 2, 3, 4, ಟಿಕೆಟ್ ಕೌಂಟರ್‌ಗಳು ಮತ್ತು ಸೌಲಭ್ಯಗಳ ನಡುವೆ ಸುರಕ್ಷಿತವಾಗಿ ಸಂಚರಿಸಲು ನೆರವಾಗುವ 2D ನ್ಯಾವಿಗೇಷನ್ ವ್ಯವಸ್ಥೆ.",
    btnStartNav: "ನ್ಯಾವಿಗೇಷನ್ ಪ್ರಾರಂಭಿಸಿ",
    btnFacilities: "ಸೌಲಭ್ಯಗಳನ್ನು ಹುಡುಕಿ",
    btnAssistance: "ಸಿಬ್ಬಂದಿ ನೆರವು ಪಡೆಯಿರಿ",
    assistanceModesTitle: "ನೆರವಿನ ಮಾದರಿಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    assistanceModesSub: "ನಿಮ್ಮ ಚಲನಶೀಲತೆ ಅಥವಾ ಆದ್ಯತೆಗೆ ಅನುಗುಣವಾಗಿ ನಿರ್ದೇಶನಗಳನ್ನು ಕಸ್ಟಮೈಸ್ ಮಾಡಿ.",
    modeGeneralTitle: "ಸಾಮಾನ್ಯ ಪ್ರಯಾಣಿಕರ ಮೋಡ್",
    modeGeneralDesc: "ಸಾಮಾನ್ಯ 2D ನಿಲ್ದಾಣದ ನಕ್ಷೆ, ಹಂತ-ಹಂತದ ನಿರ್ದೇಶನಗಳು ಮತ್ತು ಅಂದಾಜು ನಡಿಗೆ ಸಮಯ.",
    modeWheelchairTitle: "ವೀಲ್‌ಚೇರ್ ಸುಲಭ ಮೋಡ್",
    modeWheelchairDesc: "ಮೆಟ್ಟಿಲುಗಳನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಹೊರತುಪಡಿಸಿ ಲಿಫ್ಟ್‌ಗಳು ಮತ್ತು ರಾಂಪ್‌ಗಳನ್ನು ಬಳಸುವ ಮಾರ್ಗಗಳು.",
    modeVisualTitle: "ದೃಷ್ಟಿ ನೆರವು ಮೋಡ್",
    modeVisualDesc: "ಧ್ವನಿ ನ್ಯಾವಿಗೇಷನ್, ಹೆಚ್ಚಿನ ಕಾಂಟ್ರಾಸ್ಟ್ ಮತ್ತು ಪರದೆ ಓದುಗರಿಗೆ ಹೊಂದುವ ವಿನ್ಯಾಸ.",
    modeHearingTitle: "ಶ್ರವಣ ನೆರವು ಮೋಡ್",
    modeHearingDesc: "ದೃಶ್ಯ ಆಧಾರಿತ ಹಂತ-ಹಂತದ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಎಚ್ಚರಿಕೆ ಸೂಚನೆಗಳು.",
    routeFinderTitle: "2D ನಿಲ್ದಾಣದ ನಕ್ಷೆ ಮತ್ತು ಮಾರ್ಗ ಶೋಧಕ",
    reportBlockageBtn: "ತಡೆಯನ್ನು ವರದಿ ಮಾಡಿ",
    labelStartPoint: "ಪ್ರಾರಂಭದ ಸ್ಥಳ (ಪ್ರಸ್ತುತ ಸ್ಥಳ)",
    labelDestPoint: "ತಲುಪಬೇಕಾದ ಸ್ಥಳ",
    locateMe: "ನನ್ನ ಸ್ಥಳ (GPS)",
    wheelchairOpt: "ವೀಲ್‌ಚೇರ್ ಸೌಲಭ್ಯ ಮಾರ್ಗ (ಲಿಫ್ಟ್ ಮತ್ತು ರಾಂಪ್ ಮಾತ್ರ)",
    noStairsOpt: "ಮೆಟ್ಟಿಲುಗಳನ್ನು ತಡೆಯಿರಿ",
    btnFindRoute: "ಮಾರ್ಗವನ್ನು ಹುಡುಕಿ",
    routeDirectionsTitle: "ಮಾರ್ಗದ ನಿರ್ದೇಶನಗಳು",
    speakInstruction: "ನಿರ್ದೇಶನವನ್ನು ಆಲಿಸಿ",
    readDestination: "ಗಮ್ಯಸ್ಥಾನವನ್ನು ಓದಿ",
    noRouteTitle: "ಯಾವ ಮಾರ್ಗವನ್ನೂ ಆಯ್ಕೆ ಮಾಡಲಾಗಿಲ್ಲ",
    noRouteDesc: "ಪ್ರಾರಂಭ ಮತ್ತು ಗಮ್ಯಸ್ಥಾನವನ್ನು ಆಯ್ಕೆ ಮಾಡಿ 'ಮಾರ್ಗವನ್ನು ಹುಡುಕಿ' ಕ್ಲಿಕ್ ಮಾಡಿ.",
    prevStep: "ಹಿಂದಿನ ಹಂತ",
    nextStep: "ಮುಂದಿನ ಹಂತ",
    startNavAction: "ನ್ಯಾವಿಗೇಷನ್ ಪ್ರಾರಂಭಿಸಿ",
    cancelNavAction: "ರದ್ದುಮಾಡಿ",
    facilitiesHeading: "ನಿಲ್ದಾಣದ ಸೌಲಭ್ಯಗಳು",
    facilitiesSub: "ರಾಮನಗರ ಜಂಕ್ಷನ್‌ನಲ್ಲಿ ಲಭ್ಯವಿರುವ ಸೌಲಭ್ಯಗಳನ್ನು ವೀಕ್ಷಿಸಿ ಮತ್ತು ನೇರವಾಗಿ ಮಾರ್ಗವನ್ನು ಕಂಡುಕೊಳ್ಳಿ.",
    searchPlaceholder: "ಸೌಲಭ್ಯಗಳನ್ನು ಹುಡುಕಿ (ಉದಾ: ಶೌಚಾಲಯ, ಕುಡಿಯುವ ನೀರು)...",
    helpHeading: "ಪ್ರಯಾಣಿಕರ ನೆರವು ಕೋರಿ",
    helpFormDesc: "ವೀಲ್‌ಚೇರ್ ಅಥವಾ ದೃಷ್ಟಿ ನೆರವು ಅಗತ್ಯವಿರುವ ಪ್ರಯಾಣಿಕರು ಇಲ್ಲಿ ವಿನಂತಿಸಬಹುದು.",
    submitHelpReq: "ವಿನಂತಿಯನ್ನು ಸಲ್ಲಿಸಿ",
    navigateHere: "ಇಲ್ಲಿಗೆ ಮಾರ್ಗ ತೋರಿಸಿ"
  },
  hi: {
    appTitle: "रामनगरम जंक्शन स्मार्ट नेविगेशन",
    appSubtitle: "रामनगरम जंक्शन (RMGM) • भारतीय रेल",
    disclaimerBadge: "डेमो मॉडल",
    disclaimerText: "रामनगरम जंक्शन का ब्लूप्रिंट-आधारित 2D स्टेशन मानचित्र।",
    tabHome: "मुख्य पृष्ठ",
    tabMap: "नेविगेशन और मानचित्र",
    tabFacilities: "सुविधाएं",
    tabHelp: "कर्मचारी सहायता",
    welcomeHeading: "रामनगरम जंक्शन स्मार्ट नेविगेशन में आपका स्वागत है",
    heroDesc: "प्लेटफॉर्म 1, 2, 3, 4, टिकट काउंटरों और सुविधाओं के बीच सुगम और सुरक्षित 2D नेविगेशन पोर्टल।",
    btnStartNav: "नेविगेशन शुरू करें",
    btnFacilities: "सुविधाएं खोजें",
    btnAssistance: "कर्मचारी सहायता प्राप्त करें",
    assistanceModesTitle: "सहायता मोड चुनें",
    assistanceModesSub: "अपनी सुविधा और आवश्यकता के अनुसार दिशा-निर्देश प्राप्त करें।",
    modeGeneralTitle: "सामान्य यात्री मोड",
    modeGeneralDesc: "मानक 2D स्टेशन मानचित्र, मार्ग हाइलाइटिंग और चरण-दर-चरण मार्गदर्शन।",
    modeWheelchairTitle: "व्हीलचेयर सुलभ मोड",
    modeWheelchairDesc: "सीढ़ियों के बिना केवल लिफ्ट और रैंप का उपयोग करने वाले मार्ग।",
    modeVisualTitle: "दृष्टि सहायता मोड",
    modeVisualDesc: "वॉइस नेविगेशन, हाई कंट्रास्ट और स्क्रीन रीडर अनुकूलित डिज़ाइन।",
    modeHearingTitle: "श्रवण सहायता मोड",
    modeHearingDesc: "दृश्य-आधारित चरण-दर-चरण निर्देश और अलर्ट।",
    routeFinderTitle: "2D स्टेशन मानचित्र और मार्ग खोजक",
    reportBlockageBtn: "रुकावट की रिपोर्ट करें",
    labelStartPoint: "प्रारंभिक बिंदु (वर्तमान स्थान)",
    labelDestPoint: "गंतव्य",
    locateMe: "मेरा स्थान (GPS)",
    wheelchairOpt: "व्हीलचेयर सुलभ मार्ग (केवल लिफ्ट व रैंप)",
    noStairsOpt: "सीढ़ियों से बचें",
    btnFindRoute: "मार्ग खोजें",
    routeDirectionsTitle: "मार्ग के निर्देश",
    speakInstruction: "निर्देश सुनें",
    readDestination: "गंतव्य सुनें",
    noRouteTitle: "कोई मार्ग नहीं चुना गया",
    noRouteDesc: "प्रारंभिक बिंदु और गंतव्य चुनकर 'मार्ग खोजें' पर क्लिक करें।",
    prevStep: "पिछला चरण",
    nextStep: "अगला चरण",
    startNavAction: "नेविगेशन प्रारंभ करें",
    cancelNavAction: "रद्द करें",
    facilitiesHeading: "स्टेशन की सुविधाएं",
    facilitiesSub: "रामनगरम जंक्शन की सुविधाओं को देखें और सीधे मार्ग खोजें।",
    searchPlaceholder: "सुविधाएं खोजें (उदा. शौचालय, पेयजल)...",
    helpHeading: "यात्री सहायता का अनुरोध करें",
    helpFormDesc: "व्हीलचेयर या दृष्टि सहायता की आवश्यकता वाले यात्री यहां अनुरोध कर सकते हैं।",
    submitHelpReq: "अनुरोध सबमिट करें",
    navigateHere: "यहां का मार्ग देखें"
  }
};

// --------------------------------------------------------------------------
// 2. RAMANAGARA JUNCTION (RMGM) BLUEPRINT STATION NODES & GRAPH (EXACTLY 4 PLATFORMS)
// --------------------------------------------------------------------------
// Coordinates map precisely to the 2D SVG Blueprint container (800x800 viewBox).
const stationNodes = {
  // Concourse & Station Entrance Area
  entrance: { id: "entrance", names: { en: "Main Entrance / Exit Gate 🚪", kn: "ಮುಖ್ಯ ಪ್ರವೇಶದ್ವಾರ 🚪", hi: "मुख्य प्रवेश द्वार 🚪" }, x: 140, y: 440, category: "transport", level: "Concourse" },
  parking_4w: { id: "parking_4w", names: { en: "4-Wheeler Parking Area 🚗", kn: "4-ಚಕ್ರಗಳ ವಾಹನ ಪಾರ್ಕಿಂಗ್ 🚗", hi: "4-पहिया पार्किंग 🚗" }, x: 140, y: 510, category: "transport", level: "Concourse" },
  parking_2w: { id: "parking_2w", names: { en: "2-Wheeler / Auto Parking 🛵", kn: "2-ಚಕ್ರಗಳ ವಾಹನ ಪಾರ್ಕಿಂಗ್ 🛵", hi: "2-पहिया पार्किंग 🛵" }, x: 140, y: 560, category: "transport", level: "Concourse" },

  // Main Building Facilities (Platform 1 Side)
  booking: { id: "booking", names: { en: "Ticket Booking Office (UTS) 🎫", kn: "ಟಿಕೆಟ್ ಬುಕಿಂಗ್ ಕೌಂಟರ್ 🎫", hi: "टिकट बुकिंग कार्यालय 🎫" }, x: 240, y: 360, category: "services", level: "Platform 1" },
  waiting_gents: { id: "waiting_gents", names: { en: "Gents Waiting Hall 🪑", kn: "ಪುರುಷರ ಕಾಯುವ ಕೊಠಡಿ 🪑", hi: "पुरुष प्रतीक्षालय 🪑" }, x: 240, y: 300, category: "waiting", level: "Platform 1" },
  waiting_ladies: { id: "waiting_ladies", names: { en: "Ladies Waiting Hall 🚺", kn: "ಮಹಿಳೆಯರ ಕಾಯುವ ಕೊಠಡಿ 🚺", hi: "महिला प्रतीक्षालय 🚺" }, x: 240, y: 330, category: "waiting", level: "Platform 1" },
  sm_office: { id: "sm_office", names: { en: "Station Master / GRP Office 🏢", kn: "ಸ್ಟೇಷನ್ ಮಾಸ್ಟರ್ ಕಚೇರಿ 🏢", hi: "स्टेशन मास्टर कार्यालय 🏢" }, x: 240, y: 490, category: "services", level: "Platform 1" },
  divyang_toilet: { id: "divyang_toilet", names: { en: "Divyangjan Accessible Toilet ♿🚻", kn: "ದಿವ್ಯಾಂಗ ಶೌಚಾಲಯ ♿🚻", hi: "दिव्यांगजन सुलभ शौचालय ♿🚻" }, x: 240, y: 570, category: "washroom", level: "Platform 1" },

  // Platform 1 (Main Station Building Side)
  platform1: { id: "platform1", names: { en: "Platform 1 (Main Station Side)", kn: "ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ 1 (ಮುಖ್ಯ ಕಟ್ಟಡ)", hi: "प्लेटफॉर्म 1 (मुख्य इमारत)" }, x: 315, y: 300, category: "platforms", level: "Platform 1" },
  milk_stall_p1: { id: "milk_stall_p1", names: { en: "Platform 1 Milk & Refreshment Stall 🥛", kn: "ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ 1 ಹಾಲಿನ ಮಳಿಗೆ 🥛", hi: "प्लेटफॉर्म 1 स्टाल 🥛" }, x: 315, y: 470, category: "services", level: "Platform 1" },
  water_tap_p1: { id: "water_tap_p1", names: { en: "Platform 1 Drinking Water Tap 🚰", kn: "ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ 1 ಕುಡಿಯುವ ನೀರು 🚰", hi: "प्लेटफॉर्म 1 पेयजल 🚰" }, x: 315, y: 530, category: "services", level: "Platform 1" },
  fob_west_p1: { id: "fob_west_p1", names: { en: "Platform 1 West FOB Lift & Stairs 🛗🪜", kn: "ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ 1 ವೆಸ್ಟ್ FOB ಲಿಫ್ಟ್/ಮೆಟ್ಟಿಲು", hi: "प्लेटफॉर्म 1 वेस्ट FOB लिफ्ट/सीढ़ी" }, x: 315, y: 240, category: "services", level: "Platform 1" },
  fob_east_p1: { id: "fob_east_p1", names: { en: "Platform 1 East FOB Lift & Stairs 🛗🪜", kn: "ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ 1 ಈಸ್ಟ್ FOB ಲಿಫ್ಟ್/ಮೆಟ್ಟಿಲು", hi: "प्लेटफॉर्म 1 ईस्ट FOB लिफ्ट/सीढ़ी" }, x: 315, y: 650, category: "services", level: "Platform 1" },

  // Platform 2 (Island Platform - Track 1 Side)
  platform2: { id: "platform2", names: { en: "Platform 2 (Island Platform)", kn: "ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ 2", hi: "प्लेटफॉर्म 2" }, x: 470, y: 300, category: "platforms", level: "Platform 2 & 3" },
  // Platform 3 (Island Platform - Track 2 Side)
  platform3: { id: "platform3", names: { en: "Platform 3 (Island Platform)", kn: "ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ 3", hi: "ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ 3" }, x: 510, y: 300, category: "platforms", level: "Platform 2 & 3" },
  p23_toilet: { id: "p23_toilet", names: { en: "Platforms 2/3 Washroom 🚻", kn: "ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ 2/3 ಶೌಚಾಲಯ 🚻", hi: "प्लेटफॉर्म 2/3 शौचालय 🚻" }, x: 490, y: 200, category: "washroom", level: "Platform 2 & 3" },
  p23_water: { id: "p23_water", names: { en: "Platforms 2/3 Water Booth 🚰", kn: "ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ 2/3 ಕುಡಿಯುವ ನೀರು 🚰", hi: "प्लेटफॉर्म 2/3 वाटर बूथ 🚰" }, x: 490, y: 225, category: "services", level: "Platform 2 & 3" },
  fob_west_p23: { id: "fob_west_p23", names: { en: "Platforms 2/3 West FOB Lift & Stairs 🛗🪜", kn: "ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ 2/3 ವೆಸ್ಟ್ FOB ಲಿಫ್ಟ್/ಮೆಟ್ಟಿಲು", hi: "प्लेटफॉर्म 2/3 वेस्ट FOB लिफ्ट/सीढ़ी" }, x: 490, y: 250, category: "services", level: "Platform 2 & 3" },
  p23_catering: { id: "p23_catering", names: { en: "Platforms 2/3 Catering Stall 🥪", kn: "ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ 2/3 ತಿಂಡಿ ಮಳಿಗೆ 🥪", hi: "प्लेटफॉर्म 2/3 कैटरिंग 🥪" }, x: 490, y: 440, category: "services", level: "Platform 2 & 3" },
  p23_milk_stall: { id: "p23_milk_stall", names: { en: "Platforms 2/3 Milk Stall 🥛", kn: "ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ 2/3 ಹಾಲಿನ ಮಳಿಗೆ 🥛", hi: "प्लेटफॉर्म 2/3 मिल्क स्टाल 🥛" }, x: 490, y: 480, category: "services", level: "Platform 2 & 3" },
  fob_east_p23: { id: "fob_east_p23", names: { en: "Platforms 2/3 East FOB Lift & Stairs 🛗🪜", kn: "ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ 2/3 ಈಸ್ಟ್ FOB ಲಿಫ್ಟ್/ಮೆಟ್ಟಿಲು", hi: "प्लेटफॉर्म 2/3 ईस्ट FOB लिफ्ट/सीढ़ी" }, x: 490, y: 650, category: "services", level: "Platform 2 & 3" },

  // Platform 4 (Side Platform - SBC Bengaluru Direction)
  platform4: { id: "platform4", names: { en: "Platform 4 (SBC Bengaluru End)", kn: "ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ 4 (ಬೆಂಗಳೂರು ಕಡೆ)", hi: "प्लेटफॉर्म 4 (बेंगलुरु दिशा)" }, x: 655, y: 300, category: "platforms", level: "Platform 4" },
  fob_west_p4: { id: "fob_west_p4", names: { en: "Platform 4 West FOB Lift & Stairs 🛗🪜", kn: "ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ 4 ವೆಸ್ಟ್ FOB ಲಿಫ್ಟ್/ಮೆಟ್ಟಿಲು", hi: "प्लेटफॉर्म 4 वेस्ट FOB लिफ्ट/सीढ़ी" }, x: 655, y: 250, category: "services", level: "Platform 4" },
  fob_east_p4: { id: "fob_east_p4", names: { en: "Platform 4 East FOB Lift & Stairs 🛗🪜", kn: "ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ 4 ಈಸ್ಟ್ FOB ಲಿಫ್ಟ್/ಮೆಟ್ಟಿಲು", hi: "प्लेटफॉर्म 4 ईस्ट FOB लिफ्ट/सीढ़ी" }, x: 655, y: 650, category: "services", level: "Platform 4" },

  // Overhead Foot Overbridges (Bridge Level)
  fob_west_bridge: { id: "fob_west_bridge", names: { en: "West Foot Overbridge Span 🌉", kn: "ವೆಸ್ಟ್ ಕಾಲ್ನಡಿಗೆ ಮೇಲ್ಸೇತುವೆ 🌉", hi: "वेस्ट फुट ओवरब्रिज 🌉" }, x: 485, y: 240, category: "services", level: "Foot Overbridge" },
  fob_east_bridge: { id: "fob_east_bridge", names: { en: "East Foot Overbridge Span 🌉", kn: "ಈಸ್ಟ್ ಕಾಲ್ನಡಿಗೆ ಮೇಲ್ಸೇತುವೆ 🌉", hi: "ईस्ट फुट ओवरब्रिज 🌉" }, x: 485, y: 650, category: "services", level: "Foot Overbridge" }
};

// Pedestrian Graph Edges (Strictly aligned with station walkways, ramps, FOBs, lifts, and stairs)
const stationEdges = [
  // Concourse & Entrance Walkways
  { from: "parking_4w", to: "entrance", distance: 30, hasStairs: false, hasLift: false, isRamp: true },
  { from: "parking_2w", to: "entrance", distance: 35, hasStairs: false, hasLift: false, isRamp: true },
  { from: "entrance", to: "booking", distance: 25, hasStairs: false, hasLift: false, isRamp: true },
  { from: "booking", to: "waiting_gents", distance: 20, hasStairs: false, hasLift: false, isRamp: true },
  { from: "booking", to: "waiting_ladies", distance: 20, hasStairs: false, hasLift: false, isRamp: true },
  { from: "booking", to: "sm_office", distance: 30, hasStairs: false, hasLift: false, isRamp: true },
  { from: "sm_office", to: "divyang_toilet", distance: 25, hasStairs: false, hasLift: false, isRamp: true },

  // Platform 1 Walkway Connections
  { from: "booking", to: "platform1", distance: 20, hasStairs: false, hasLift: false, isRamp: true },
  { from: "platform1", to: "fob_west_p1", distance: 35, hasStairs: false, hasLift: false, isRamp: true },
  { from: "platform1", to: "milk_stall_p1", distance: 40, hasStairs: false, hasLift: false, isRamp: true },
  { from: "milk_stall_p1", to: "water_tap_p1", distance: 25, hasStairs: false, hasLift: false, isRamp: true },
  { from: "water_tap_p1", to: "fob_east_p1", distance: 45, hasStairs: false, hasLift: false, isRamp: true },

  // Vertical Connections via West Foot Overbridge (P1 <-> FOB West <-> P2/3 <-> P4)
  { from: "fob_west_p1", to: "fob_west_bridge", distance: 20, hasStairs: true, hasLift: true, isRamp: false },
  { from: "fob_west_bridge", to: "fob_west_p23", distance: 20, hasStairs: true, hasLift: true, isRamp: false },
  { from: "fob_west_bridge", to: "fob_west_p4", distance: 25, hasStairs: true, hasLift: true, isRamp: false },

  // Vertical Connections via East Foot Overbridge (P1 <-> FOB East <-> P2/3 <-> P4)
  { from: "fob_east_p1", to: "fob_east_bridge", distance: 20, hasStairs: true, hasLift: true, isRamp: false },
  { from: "fob_east_bridge", to: "fob_east_p23", distance: 20, hasStairs: true, hasLift: true, isRamp: false },
  { from: "fob_east_bridge", to: "fob_east_p4", distance: 25, hasStairs: true, hasLift: true, isRamp: false },

  // Platform 2 & 3 Island Walkway Connections
  { from: "fob_west_p23", to: "p23_water", distance: 15, hasStairs: false, hasLift: false, isRamp: true },
  { from: "p23_water", to: "p23_toilet", distance: 15, hasStairs: false, hasLift: false, isRamp: true },
  { from: "fob_west_p23", to: "platform2", distance: 25, hasStairs: false, hasLift: false, isRamp: true },
  { from: "fob_west_p23", to: "platform3", distance: 25, hasStairs: false, hasLift: false, isRamp: true },
  { from: "platform2", to: "p23_catering", distance: 35, hasStairs: false, hasLift: false, isRamp: true },
  { from: "platform3", to: "p23_catering", distance: 35, hasStairs: false, hasLift: false, isRamp: true },
  { from: "p23_catering", to: "p23_milk_stall", distance: 20, hasStairs: false, hasLift: false, isRamp: true },
  { from: "p23_milk_stall", to: "fob_east_p23", distance: 45, hasStairs: false, hasLift: false, isRamp: true },

  // Platform 4 Side Walkway Connections
  { from: "fob_west_p4", to: "platform4", distance: 25, hasStairs: false, hasLift: false, isRamp: true },
  { from: "platform4", to: "fob_east_p4", distance: 90, hasStairs: false, hasLift: false, isRamp: true }
];

// --------------------------------------------------------------------------
// 3. APPLICATION STATE
// --------------------------------------------------------------------------
const appState = {
  currentLang: "en",
  activeProfile: "general", // "general", "wheelchair", "visual", "hearing"
  textSize: "normal",
  highContrast: false,
  ttsEnabled: false,
  blockedNodes: new Set(),
  blockedEdges: new Set(),
  calculatedRoute: null,
  currentStepIndex: 0,
  isNavigating: false,
  selectedNodeId: null,
  userLocationNodeId: "entrance", // Default current location
  isGpsActive: false,
  mapZoom: 1,
  viewBox: { x: 0, y: 0, width: 800, height: 800 },
  staffToken: null,
  staffUser: null,
  backendConnected: false
};

// --------------------------------------------------------------------------
// 4. DIJKSTRA PATHFINDING ALGORITHM
// --------------------------------------------------------------------------
function findShortestRoute(startId, destId, options = {}) {
  if (startId === destId) return { path: [startId], totalDistance: 0, steps: [] };

  const distances = {};
  const previous = {};
  const edgeUsed = {};
  const unvisited = new Set(Object.keys(stationNodes));

  Object.keys(stationNodes).forEach(node => {
    distances[node] = Infinity;
    previous[node] = null;
  });
  distances[startId] = 0;

  // Build Adjacency List
  const adj = {};
  Object.keys(stationNodes).forEach(node => { adj[node] = []; });

  stationEdges.forEach(edge => {
    // Skip blocked nodes
    if (appState.blockedNodes.has(edge.from) || appState.blockedNodes.has(edge.to)) return;

    // Filter based on wheelchair / no-stairs preference
    if (options.requireWheelchair && edge.hasStairs && !edge.hasLift && !edge.isRamp) return;
    if (options.avoidStairs && edge.hasStairs && !edge.hasLift) return;

    adj[edge.from].push({ node: edge.to, distance: edge.distance, meta: edge });
    adj[edge.to].push({ node: edge.from, distance: edge.distance, meta: edge });
  });

  while (unvisited.size > 0) {
    let current = null;
    let minDistance = Infinity;
    unvisited.forEach(node => {
      if (distances[node] < minDistance) {
        minDistance = distances[node];
        current = node;
      }
    });

    if (current === null || distances[current] === Infinity) break;
    if (current === destId) break;

    unvisited.delete(current);

    adj[current].forEach(neighbor => {
      if (unvisited.has(neighbor.node)) {
        const alt = distances[current] + neighbor.distance;
        if (alt < distances[neighbor.node]) {
          distances[neighbor.node] = alt;
          previous[neighbor.node] = current;
          edgeUsed[neighbor.node] = neighbor.meta;
        }
      }
    });
  }

  if (distances[destId] === Infinity) return null;

  // Reconstruct path
  const path = [];
  let curr = destId;
  while (curr) {
    path.unshift(curr);
    curr = previous[curr];
  }

  // Generate directions steps
  const steps = [];
  for (let i = 0; i < path.length - 1; i++) {
    const fromNode = stationNodes[path[i]];
    const toNode = stationNodes[path[i+1]];
    const edge = edgeUsed[path[i+1]];

    let modeText = "Walk along pedestrian path";
    let icon = "🚶";

    if (fromNode.level !== toNode.level) {
      if (options.requireWheelchair || (edge && edge.hasLift)) {
        modeText = `LIFT ACCESS - Elevator from ${fromNode.level} to ${toNode.level} 🛗`;
        icon = "🛗";
      } else {
        modeText = `STAIRS AHEAD - Staircase connection from ${fromNode.level} to ${toNode.level} 🪜`;
        icon = "🪜";
      }
    } else if (edge && edge.isRamp) {
      modeText = "Walk via step-free concourse / platform walkway";
      icon = "♿";
    }

    steps.push({
      stepNumber: i + 1,
      from: fromNode.names[appState.currentLang] || fromNode.names["en"],
      to: toNode.names[appState.currentLang] || toNode.names["en"],
      distance: edge ? edge.distance : 25,
      modeText: modeText,
      icon: icon,
      fromLevel: fromNode.level,
      toLevel: toNode.level
    });
  }

  return {
    path: path,
    totalDistance: distances[destId],
    estimatedTimeMins: Math.ceil(distances[destId] / 45), // ~45m/min walking speed
    steps: steps
  };
}

// --------------------------------------------------------------------------
// 5. DOM READY HANDLER & INITIALIZATION
// --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  console.log("Initializing Ramanagara Junction Smart Navigation app...");

  // Verify required HTML elements
  const findButton = document.getElementById("btn-find-route");
  const startSelect = document.getElementById("select-start");
  const destinationSelect = document.getElementById("select-dest");
  const stepsContainer = document.getElementById("steps-container");

  if (!findButton || !startSelect || !destinationSelect || !stepsContainer) {
    console.error("Error: Required HTML elements were not found.");
    return;
  }

  // Populate Location Dropdowns
  populateDropdowns();

  // Render 2D SVG Blueprint Map
  renderSvgMap();

  // Setup Event Listeners & Zoom Controls
  setupEventListeners();
  setupMapZoomPan();

  // Render Facilities Grid
  renderFacilitiesList("all");

  // Apply initial language translations
  updateLanguage(appState.currentLang);

  // Poll backend health status
  checkBackendHealth();
  setInterval(checkBackendHealth, 15000);

  console.log("Ramanagara Junction Navigation script initialized successfully.");
});

// --------------------------------------------------------------------------
// 6. BACKEND HEALTH CHECKER
// --------------------------------------------------------------------------
function checkBackendHealth() {
  const badge = document.getElementById("backend-status-badge");
  fetch("/api/health")
    .then(res => {
      if (res.ok) return res.json();
      throw new Error("Backend offline");
    })
    .then(data => {
      appState.backendConnected = true;
      if (badge) {
        badge.className = "status-badge badge-live";
        badge.innerHTML = `<span class="status-dot"></span> Backend Live (REST Connected)`;
      }
    })
    .catch(err => {
      appState.backendConnected = false;
      if (badge) {
        badge.className = "status-badge badge-offline";
        badge.innerHTML = `<span class="status-dot"></span> Offline Mode`;
      }
    });
}

// --------------------------------------------------------------------------
// 7. POPULATE LOCATION DROPDOWNS
// --------------------------------------------------------------------------
function populateDropdowns() {
  const startSelect = document.getElementById("select-start");
  const destSelect = document.getElementById("select-dest");
  const helpSelect = document.getElementById("select-help-location");
  const blockageSelect = document.getElementById("select-blockage-node");

  if (!startSelect || !destSelect) return;

  const optionsHtml = Object.values(stationNodes).map(node => {
    const name = node.names[appState.currentLang] || node.names["en"];
    return `<option value="${node.id}">${name}</option>`;
  }).join("");

  startSelect.innerHTML = optionsHtml;
  destSelect.innerHTML = optionsHtml;
  if (helpSelect) helpSelect.innerHTML = optionsHtml;
  if (blockageSelect) blockageSelect.innerHTML = optionsHtml;

  // Defaults: Main Entrance -> Platform 1
  startSelect.value = appState.userLocationNodeId || "entrance";
  destSelect.value = "platform1";
}

// --------------------------------------------------------------------------
// 8. RENDER 2D SVG BLUEPRINT MAP & USER LOCATION DOT
// --------------------------------------------------------------------------
function renderSvgMap() {
  const svgEdgesLayer = document.getElementById("svg-edges-layer");
  const svgNodesLayer = document.getElementById("svg-nodes-layer");
  if (!svgEdgesLayer || !svgNodesLayer) return;

  svgEdgesLayer.innerHTML = "";
  svgNodesLayer.innerHTML = "";

  // Render Pedestrian Edges
  stationEdges.forEach(edge => {
    const fromNode = stationNodes[edge.from];
    const toNode = stationNodes[edge.to];
    if (!fromNode || !toNode) return;

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", fromNode.x);
    line.setAttribute("y1", fromNode.y);
    line.setAttribute("x2", toNode.x);
    line.setAttribute("y2", toNode.y);
    line.setAttribute("class", "edge-line");
    if (edge.hasStairs) line.setAttribute("stroke-dasharray", "4 4");
    svgEdgesLayer.appendChild(line);
  });

  // Render Station Nodes
  Object.values(stationNodes).forEach(node => {
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("class", "map-node-group");
    g.setAttribute("data-node-id", node.id);

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", node.x);
    circle.setAttribute("cy", node.y);
    circle.setAttribute("r", 8);
    circle.setAttribute("class", "node-circle");
    if (appState.blockedNodes.has(node.id)) {
      circle.classList.add("blocked-node");
    }

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", node.x);
    text.setAttribute("y", node.y - 12);
    text.setAttribute("class", "node-text");
    const nameStr = (node.names[appState.currentLang] || node.names["en"]).split(" ")[0];
    text.textContent = nameStr;

    g.appendChild(circle);
    g.appendChild(text);

    g.addEventListener("click", (e) => {
      e.stopPropagation();
      openNodePopup(node, e);
    });

    svgNodesLayer.appendChild(g);
  });

  // Render User Location Pulsing Dot
  renderUserLocationDot(appState.userLocationNodeId);
}

function renderUserLocationDot(nodeId) {
  const locGroup = document.getElementById("user-location-group");
  if (!locGroup) return;
  locGroup.innerHTML = "";

  const node = stationNodes[nodeId];
  if (!node) return;

  // Outer Pulse Circle
  const pulseCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  pulseCircle.setAttribute("cx", node.x);
  pulseCircle.setAttribute("cy", node.y);
  pulseCircle.setAttribute("r", 18);
  pulseCircle.setAttribute("fill", "#10b981");
  pulseCircle.setAttribute("fill-opacity", "0.4");
  pulseCircle.setAttribute("class", "pulse-ring");

  // Inner Solid Green Circle
  const dotCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  dotCircle.setAttribute("cx", node.x);
  dotCircle.setAttribute("cy", node.y);
  dotCircle.setAttribute("r", 9);
  dotCircle.setAttribute("fill", "#10b981");
  dotCircle.setAttribute("stroke", "#ffffff");
  dotCircle.setAttribute("stroke-width", "2.5");

  // Tooltip Text Tag
  const textTag = document.createElementNS("http://www.w3.org/2000/svg", "text");
  textTag.setAttribute("x", node.x);
  textTag.setAttribute("y", node.y + 22);
  textTag.setAttribute("text-anchor", "middle");
  textTag.setAttribute("fill", "#10b981");
  textTag.setAttribute("font-weight", "bold");
  textTag.setAttribute("font-size", "11px");
  textTag.textContent = "YOU ARE HERE";

  locGroup.appendChild(pulseCircle);
  locGroup.appendChild(dotCircle);
  locGroup.appendChild(textTag);
}

function renderRouteOnMap(route) {
  const svgRouteLayer = document.getElementById("svg-route-layer");
  if (!svgRouteLayer) return;
  svgRouteLayer.innerHTML = "";

  if (!route || !route.path || route.path.length < 2) return;

  document.querySelectorAll(".node-circle").forEach(circle => {
    circle.classList.remove("start-node", "dest-node");
  });

  const startId = route.path[0];
  const destId = route.path[route.path.length - 1];

  const startCircle = document.querySelector(`.map-node-group[data-node-id="${startId}"] .node-circle`);
  const destCircle = document.querySelector(`.map-node-group[data-node-id="${destId}"] .node-circle`);
  if (startCircle) startCircle.classList.add("start-node");
  if (destCircle) destCircle.classList.add("dest-node");

  const points = route.path.map(id => {
    const node = stationNodes[id];
    return `${node.x},${node.y}`;
  }).join(" ");

  const polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
  polyline.setAttribute("points", points);
  polyline.setAttribute("class", "route-edge");
  polyline.setAttribute("marker-end", "url(#arrow)");
  svgRouteLayer.appendChild(polyline);

  // Update user location dot position to start node
  appState.userLocationNodeId = startId;
  renderUserLocationDot(startId);
}

// --------------------------------------------------------------------------
// 9. SVG MAP ZOOM & PAN CONTROLS
// --------------------------------------------------------------------------
function setupMapZoomPan() {
  const svg = document.getElementById("station-svg-map");
  const btnIn = document.getElementById("btn-zoom-in");
  const btnOut = document.getElementById("btn-zoom-out");
  const btnReset = document.getElementById("btn-zoom-reset");

  if (!svg) return;

  let zoomLevel = 1;
  const minZoom = 0.6;
  const maxZoom = 2.5;

  function updateViewBox() {
    const w = 800 / zoomLevel;
    const h = 800 / zoomLevel;
    const x = (800 - w) / 2;
    const y = (800 - h) / 2;
    svg.setAttribute("viewBox", `${x} ${y} ${w} ${h}`);
  }

  if (btnIn) {
    btnIn.addEventListener("click", () => {
      if (zoomLevel < maxZoom) {
        zoomLevel += 0.25;
        updateViewBox();
      }
    });
  }

  if (btnOut) {
    btnOut.addEventListener("click", () => {
      if (zoomLevel > minZoom) {
        zoomLevel -= 0.25;
        updateViewBox();
      }
    });
  }

  if (btnReset) {
    btnReset.addEventListener("click", () => {
      zoomLevel = 1;
      svg.setAttribute("viewBox", "0 0 800 800");
    });
  }
}

// --------------------------------------------------------------------------
// 10. NODE CONTEXT POPUP HANDLER
// --------------------------------------------------------------------------
function openNodePopup(node, event) {
  const popup = document.getElementById("node-popup");
  const title = document.getElementById("popup-node-title");
  const desc = document.getElementById("popup-node-desc");
  if (!popup || !title) return;

  appState.selectedNodeId = node.id;
  title.textContent = node.names[appState.currentLang] || node.names["en"];
  if (desc) desc.textContent = `Level: ${node.level} • Map Pos: (${node.x}, ${node.y})`;

  const mapViewport = document.getElementById("map-viewport");
  const rect = mapViewport.getBoundingClientRect();
  const left = Math.min(rect.width - 220, Math.max(10, event.clientX - rect.left - 100));
  const top = Math.min(rect.height - 150, Math.max(10, event.clientY - rect.top - 120));

  popup.style.left = `${left}px`;
  popup.style.top = `${top}px`;
  popup.classList.remove("hidden");
}

function closeNodePopup() {
  const popup = document.getElementById("node-popup");
  if (popup) popup.classList.add("hidden");
}

// --------------------------------------------------------------------------
// 11. SETUP EVENT LISTENERS
// --------------------------------------------------------------------------
function setupEventListeners() {
  // Navigation Tabs
  const tabs = document.querySelectorAll(".nav-tab, .mobile-nav-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", function () {
      const targetView = this.getAttribute("data-target");
      if (!targetView) return;

      tabs.forEach(t => t.classList.remove("active"));
      document.querySelectorAll(`.nav-tab[data-target="${targetView}"], .mobile-nav-btn[data-target="${targetView}"]`)
        .forEach(t => t.classList.add("active"));

      document.querySelectorAll(".app-view").forEach(view => view.classList.remove("active"));
      const activeViewEl = document.getElementById(targetView);
      if (activeViewEl) activeViewEl.classList.add("active");

      if (targetView === "view-staff" && appState.staffToken) {
        loadStaffDashboardData();
      }
    });
  });

  // Hero Section Buttons
  const btnHomeNav = document.getElementById("btn-home-start-nav");
  if (btnHomeNav) btnHomeNav.addEventListener("click", () => switchTab("view-map"));

  const btnHomeFac = document.getElementById("btn-home-facilities");
  if (btnHomeFac) btnHomeFac.addEventListener("click", () => switchTab("view-facilities"));

  const btnHomeAssist = document.getElementById("btn-home-assistance");
  if (btnHomeAssist) btnHomeAssist.addEventListener("click", () => switchTab("view-help"));

  // GPS Locate Me Button Simulation
  const btnLocateGps = document.getElementById("btn-locate-gps");
  const locationStatusTag = document.getElementById("location-status-tag");
  if (btnLocateGps) {
    btnLocateGps.addEventListener("click", function () {
      appState.isGpsActive = true;
      appState.userLocationNodeId = "entrance";
      const startSelect = document.getElementById("select-start");
      if (startSelect) startSelect.value = "entrance";

      if (locationStatusTag) {
        locationStatusTag.className = "location-status-bar status-active";
        locationStatusTag.innerHTML = `🟢 <strong>Current Location:</strong> Main Entrance Gate (Simulated GPS Signal Active)`;
      }
      renderUserLocationDot("entrance");
      alert("🟢 GPS Signal Lock: Current location updated to Main Entrance / Exit Gate.");
    });
  }

  // Start Dropdown Selection Change Updates Location Marker & Status Tag
  const startSelect = document.getElementById("select-start");
  if (startSelect) {
    startSelect.addEventListener("change", function () {
      appState.userLocationNodeId = this.value;
      renderUserLocationDot(this.value);

      if (locationStatusTag) {
        const nodeName = stationNodes[this.value]?.names[appState.currentLang] || "Selected Location";
        locationStatusTag.className = "location-status-bar status-manual";
        locationStatusTag.innerHTML = `📍 <strong>Starting Location:</strong> ${nodeName} (Manual Selection)`;
      }
    });
  }

  // Swap Locations Button
  const btnSwap = document.getElementById("btn-swap-locations");
  if (btnSwap) {
    btnSwap.addEventListener("click", function () {
      const startSelect = document.getElementById("select-start");
      const destSelect = document.getElementById("select-dest");
      if (startSelect && destSelect) {
        const temp = startSelect.value;
        startSelect.value = destSelect.value;
        destSelect.value = temp;

        appState.userLocationNodeId = startSelect.value;
        renderUserLocationDot(startSelect.value);
      }
    });
  }

  // Assistance Profile Mode Cards
  const modeCards = document.querySelectorAll(".mode-card");
  modeCards.forEach(card => {
    card.addEventListener("click", function () {
      modeCards.forEach(c => c.classList.remove("active"));
      this.classList.add("active");

      const mode = this.getAttribute("data-mode");
      appState.activeProfile = mode;

      const chkWheelchair = document.getElementById("chk-wheelchair");
      const chkNoStairs = document.getElementById("chk-no-stairs");
      const modeChip = document.getElementById("chip-mode-indicator");

      if (mode === "wheelchair") {
        if (chkWheelchair) chkWheelchair.checked = true;
        if (chkNoStairs) chkNoStairs.checked = true;
        if (modeChip) modeChip.textContent = "Wheelchair Mode";
      } else if (mode === "visual") {
        appState.highContrast = true;
        document.body.classList.add("high-contrast");
        const speechToolbar = document.getElementById("speech-toolbar");
        if (speechToolbar) speechToolbar.classList.remove("hidden");
        if (modeChip) modeChip.textContent = "Visual Mode";
      } else {
        if (modeChip) modeChip.textContent = "General Mode";
      }
    });
  });

  // Find Route Form Submit
  const routeForm = document.getElementById("route-form");
  if (routeForm) {
    routeForm.addEventListener("submit", function (e) {
      e.preventDefault();
      calculateAndDisplayRoute();
    });
  }

  // Popup Buttons
  const btnPopupStart = document.getElementById("btn-popup-set-start");
  if (btnPopupStart) {
    btnPopupStart.addEventListener("click", function () {
      const startSelect = document.getElementById("select-start");
      if (startSelect && appState.selectedNodeId) {
        startSelect.value = appState.selectedNodeId;
        appState.userLocationNodeId = appState.selectedNodeId;
        renderUserLocationDot(appState.selectedNodeId);
      }
      closeNodePopup();
    });
  }

  const btnPopupDest = document.getElementById("btn-popup-set-dest");
  if (btnPopupDest) {
    btnPopupDest.addEventListener("click", function () {
      const destSelect = document.getElementById("select-dest");
      if (destSelect && appState.selectedNodeId) {
        destSelect.value = appState.selectedNodeId;
      }
      closeNodePopup();
    });
  }

  const btnPopupClose = document.getElementById("btn-popup-close");
  if (btnPopupClose) btnPopupClose.addEventListener("click", closeNodePopup);

  // Text-to-Speech Controls
  const btnSpeechStep = document.getElementById("btn-speech-read-step");
  if (btnSpeechStep) {
    btnSpeechStep.addEventListener("click", function () {
      if (appState.calculatedRoute && appState.calculatedRoute.steps.length > 0) {
        const step = appState.calculatedRoute.steps[appState.currentStepIndex];
        speakText(`Step ${step.stepNumber}: ${step.modeText} from ${step.from} to ${step.to}`);
      }
    });
  }

  // Navigation Steps Prev / Next Controls
  const btnPrev = document.getElementById("btn-prev-step");
  const btnNext = document.getElementById("btn-next-step");
  if (btnPrev && btnNext) {
    btnPrev.addEventListener("click", () => changeNavigationStep(-1));
    btnNext.addEventListener("click", () => changeNavigationStep(1));
  }

  // Navigation Action Buttons
  const btnStartNavAction = document.getElementById("btn-start-nav");
  const btnCancelNavAction = document.getElementById("btn-cancel-nav");
  if (btnStartNavAction) btnStartNavAction.addEventListener("click", startActiveNavigation);
  if (btnCancelNavAction) btnCancelNavAction.addEventListener("click", cancelActiveNavigation);

  // Facilities Search & Category Filters
  const catPills = document.querySelectorAll(".cat-pill");
  catPills.forEach(pill => {
    pill.addEventListener("click", function () {
      catPills.forEach(p => p.classList.remove("active"));
      this.classList.add("active");
      const category = this.getAttribute("data-category");
      renderFacilitiesList(category);
    });
  });

  const facilitySearch = document.getElementById("facility-search-input");
  if (facilitySearch) {
    facilitySearch.addEventListener("input", function () {
      renderFacilitiesList("all", this.value.toLowerCase());
    });
  }

  // Language Selector
  const langSelect = document.getElementById("lang-select");
  if (langSelect) {
    langSelect.addEventListener("change", function () {
      updateLanguage(this.value);
    });
  }

  // High Contrast & Font Controls
  const btnContrast = document.getElementById("btn-toggle-contrast");
  if (btnContrast) btnContrast.addEventListener("click", toggleHighContrast);

  const btnTextDec = document.getElementById("btn-text-decrease");
  const btnTextInc = document.getElementById("btn-text-increase");
  if (btnTextDec && btnTextInc) {
    btnTextDec.addEventListener("click", () => changeTextSize(-1));
    btnTextInc.addEventListener("click", () => changeTextSize(1));
  }

  // Modals & Staff Setup
  setupModalHandlers();
}

// --------------------------------------------------------------------------
// 12. CALCULATE AND DISPLAY ROUTE
// --------------------------------------------------------------------------
function calculateAndDisplayRoute() {
  const startSelect = document.getElementById("select-start");
  const destSelect = document.getElementById("select-dest");
  const chkWheelchair = document.getElementById("chk-wheelchair");
  const chkNoStairs = document.getElementById("chk-no-stairs");
  const stepsContainer = document.getElementById("steps-container");
  const distTag = document.getElementById("route-distance-tag");
  const timeTag = document.getElementById("route-time-tag");
  const navActionBtns = document.getElementById("nav-action-buttons");

  if (!startSelect || !destSelect || !stepsContainer) return;

  const startId = startSelect.value;
  const destId = destSelect.value;

  if (startId === destId) {
    stepsContainer.innerHTML = `
      <div class="alert-banner-warning text-center">
        <strong>📍 Same Location Selected</strong>
        <p>You are already at your selected destination!</p>
      </div>`;
    return;
  }

  const route = findShortestRoute(startId, destId, {
    requireWheelchair: chkWheelchair ? chkWheelchair.checked : false,
    avoidStairs: chkNoStairs ? chkNoStairs.checked : false
  });

  if (!route) {
    stepsContainer.innerHTML = `
      <div class="alert-banner-warning text-center">
        <strong>⚠️ No Step-Free Route Found</strong>
        <p>No available path between selected locations under current constraints. Try unchecking stair restrictions or selecting an elevator connection.</p>
      </div>`;
    return;
  }

  appState.calculatedRoute = route;
  appState.currentStepIndex = 0;

  if (distTag) distTag.textContent = `${route.totalDistance} m`;
  if (timeTag) timeTag.textContent = `${route.estimatedTimeMins} mins`;

  const stepsHtml = route.steps.map((step, idx) => `
    <div class="step-card ${idx === 0 ? 'active' : ''}" data-step-index="${idx}">
      <div class="step-number">${step.stepNumber}</div>
      <div class="step-content">
        <div class="step-title">${step.icon} ${step.modeText}</div>
        <div class="step-detail">From <strong>${step.from}</strong> to <strong>${step.to}</strong> (${step.distance}m)</div>
      </div>
    </div>
  `).join("");

  stepsContainer.innerHTML = stepsHtml;

  const stepControls = document.getElementById("step-nav-controls");
  if (stepControls) stepControls.classList.remove("hidden");
  if (navActionBtns) navActionBtns.classList.remove("hidden");

  renderRouteOnMap(route);

  if (appState.ttsEnabled) {
    speakText(`Route found. Distance ${route.totalDistance} meters. Step 1: ${route.steps[0].modeText}`);
  }
}

// --------------------------------------------------------------------------
// 13. ACTIVE NAVIGATION & STEP NAVIGATION
// --------------------------------------------------------------------------
function changeNavigationStep(delta) {
  if (!appState.calculatedRoute) return;
  const maxIdx = appState.calculatedRoute.steps.length - 1;
  appState.currentStepIndex = Math.max(0, Math.min(maxIdx, appState.currentStepIndex + delta));

  document.querySelectorAll(".step-card").forEach((card, idx) => {
    if (idx === appState.currentStepIndex) {
      card.classList.add("active");
      card.scrollIntoView({ behavior: "smooth", block: "nearest" });
    } else {
      card.classList.remove("active");
    }
  });

  const stepCounter = document.getElementById("step-counter");
  if (stepCounter) {
    stepCounter.textContent = `Step ${appState.currentStepIndex + 1} of ${maxIdx + 1}`;
  }

  const btnPrev = document.getElementById("btn-prev-step");
  const btnNext = document.getElementById("btn-next-step");
  if (btnPrev) btnPrev.disabled = (appState.currentStepIndex === 0);
  if (btnNext) btnNext.disabled = (appState.currentStepIndex === maxIdx);

  if (appState.ttsEnabled) {
    const step = appState.calculatedRoute.steps[appState.currentStepIndex];
    speakText(`Step ${appState.currentStepIndex + 1}: ${step.modeText} to ${step.to}`);
  }
}

function startActiveNavigation() {
  appState.isNavigating = true;
  const statusBanner = document.getElementById("nav-active-status");
  const btnStart = document.getElementById("btn-start-nav");
  const btnCancel = document.getElementById("btn-cancel-nav");

  if (statusBanner) statusBanner.classList.remove("hidden");
  if (btnStart) btnStart.classList.add("hidden");
  if (btnCancel) btnCancel.classList.remove("hidden");
}

function cancelActiveNavigation() {
  appState.isNavigating = false;
  const statusBanner = document.getElementById("nav-active-status");
  const btnStart = document.getElementById("btn-start-nav");
  const btnCancel = document.getElementById("btn-cancel-nav");

  if (statusBanner) statusBanner.classList.add("hidden");
  if (btnStart) btnStart.classList.remove("hidden");
  if (btnCancel) btnCancel.classList.add("hidden");
}

// --------------------------------------------------------------------------
// 14. RENDER FACILITIES LIST
// --------------------------------------------------------------------------
function renderFacilitiesList(categoryFilter = "all", searchQuery = "") {
  const grid = document.getElementById("facilities-grid");
  if (!grid) return;

  const facilities = Object.values(stationNodes).filter(node => {
    const matchesCategory = (categoryFilter === "all" || node.category === categoryFilter);
    const name = (node.names[appState.currentLang] || node.names["en"]).toLowerCase();
    const matchesSearch = (!searchQuery || name.includes(searchQuery));
    return matchesCategory && matchesSearch;
  });

  const html = facilities.map(fac => {
    const name = fac.names[appState.currentLang] || fac.names["en"];
    return `
      <div class="facility-card">
        <div class="facility-top">
          <div class="facility-icon-badge">📍</div>
          <span class="facility-location-tag">${fac.category.toUpperCase()} • ${fac.level}</span>
        </div>
        <div class="facility-title">${name}</div>
        <div class="facility-desc">Located at Ramanagara Junction (${fac.level}). Click below to calculate route.</div>
        <button class="btn btn-primary btn-sm btn-nav-facility" data-node-id="${fac.id}">
          ${i18n[appState.currentLang].navigateHere || "Navigate Here"}
        </button>
      </div>
    `;
  }).join("");

  grid.innerHTML = html;

  document.querySelectorAll(".btn-nav-facility").forEach(btn => {
    btn.addEventListener("click", function () {
      const nodeId = this.getAttribute("data-node-id");
      const destSelect = document.getElementById("select-dest");
      if (destSelect) destSelect.value = nodeId;
      switchTab("view-map");
      calculateAndDisplayRoute();
    });
  });
}

// --------------------------------------------------------------------------
// 15. MULTILINGUAL DICTIONARY UPDATER
// --------------------------------------------------------------------------
function updateLanguage(lang) {
  if (!i18n[lang]) return;
  appState.currentLang = lang;

  const dict = i18n[lang];
  const textMappings = {
    "app-title": dict.appTitle,
    "app-subtitle": dict.appSubtitle,
    "disclaimer-badge-text": dict.disclaimerBadge,
    "disclaimer-text": dict.disclaimerText,
    "tab-text-home": dict.tabHome,
    "tab-text-map": dict.tabMap,
    "tab-text-facilities": dict.tabFacilities,
    "tab-text-help": dict.tabHelp,
    "mob-txt-home": dict.tabHome,
    "mob-txt-map": dict.tabMap,
    "mob-txt-facilities": dict.tabFacilities,
    "mob-txt-help": dict.tabHelp,
    "home-heading": dict.welcomeHeading,
    "hero-desc": dict.heroDesc,
    "txt-home-start-nav": dict.btnStartNav,
    "txt-home-facilities": dict.btnFacilities,
    "txt-home-assistance": dict.btnAssistance,
    "title-assistance-modes": dict.assistanceModesTitle,
    "sub-assistance-modes": dict.assistanceModesSub,
    "mode-title-general": dict.modeGeneralTitle,
    "mode-desc-general": dict.modeGeneralDesc,
    "mode-title-wheelchair": dict.modeWheelchairTitle,
    "mode-desc-wheelchair": dict.modeWheelchairDesc,
    "mode-title-visual": dict.modeVisualTitle,
    "mode-desc-visual": dict.modeVisualDesc,
    "mode-title-hearing": dict.modeHearingTitle,
    "mode-desc-hearing": dict.modeHearingDesc,
    "map-heading": dict.routeFinderTitle,
    "txt-btn-report-blockage": dict.reportBlockageBtn,
    "label-start-point": dict.labelStartPoint,
    "label-dest-point": dict.labelDestPoint,
    "txt-gps-locate": dict.locateMe,
    "lbl-chk-wheelchair": dict.wheelchairOpt,
    "lbl-chk-no-stairs": dict.noStairsOpt,
    "txt-find-route": dict.btnFindRoute,
    "title-route-directions": dict.routeDirectionsTitle,
    "txt-speech-read": dict.speakInstruction,
    "txt-speech-dest": dict.readDestination,
    "txt-empty-steps-title": dict.noRouteTitle,
    "txt-empty-steps-desc": dict.noRouteDesc,
    "txt-prev-step": dict.prevStep,
    "txt-next-step": dict.nextStep,
    "txt-start-nav-action": dict.startNavAction,
    "txt-cancel-nav-action": dict.cancelNavAction,
    "facilities-heading": dict.facilitiesHeading,
    "sub-facilities": dict.facilitiesSub,
    "help-heading": dict.helpHeading,
    "desc-help-form": dict.helpFormDesc,
    "txt-submit-help": dict.submitHelpReq
  };

  Object.keys(textMappings).forEach(id => {
    const el = document.getElementById(id);
    if (el && textMappings[id]) el.textContent = textMappings[id];
  });

  populateDropdowns();
  renderSvgMap();
  renderFacilitiesList("all");
}

// --------------------------------------------------------------------------
// 16. ACCESSIBILITY TOGGLES & MODALS HANDLERS
// --------------------------------------------------------------------------
function toggleHighContrast() {
  appState.highContrast = !appState.highContrast;
  if (appState.highContrast) {
    document.body.classList.add("high-contrast");
  } else {
    document.body.classList.remove("high-contrast");
  }
}

function changeTextSize(delta) {
  const sizes = ["normal", "large", "xlarge"];
  let currIdx = sizes.indexOf(appState.textSize);
  currIdx = Math.max(0, Math.min(sizes.length - 1, currIdx + delta));
  appState.textSize = sizes[currIdx];

  document.documentElement.setAttribute("data-text-size", appState.textSize);
  const indicator = document.getElementById("current-text-size");
  if (indicator) {
    indicator.textContent = appState.textSize === "normal" ? "100%" : (appState.textSize === "large" ? "125%" : "150%");
  }
}

function speakText(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95;
    window.speechSynthesis.speak(utterance);
  }
}

function switchTab(viewId) {
  const tabBtn = document.querySelector(`.nav-tab[data-target="${viewId}"], .mobile-nav-btn[data-target="${viewId}"]`);
  if (tabBtn) tabBtn.click();
}

// --------------------------------------------------------------------------
// 17. MODALS, ASSISTANCE REQUEST API, STAFF PORTAL, & HAZARD REPORTING
// --------------------------------------------------------------------------
function setupModalHandlers() {
  // Accessibility Modal
  const btnOpenA11y = document.getElementById("btn-open-a11y");
  const btnCloseA11y = document.getElementById("btn-close-a11y");
  const modalA11y = document.getElementById("modal-a11y");

  if (btnOpenA11y && modalA11y) btnOpenA11y.addEventListener("click", () => modalA11y.classList.remove("hidden"));
  if (btnCloseA11y && modalA11y) btnCloseA11y.addEventListener("click", () => modalA11y.classList.add("hidden"));

  // Blockage Modal
  const btnOpenBlk = document.getElementById("btn-open-blockage-modal");
  const btnCloseBlk = document.getElementById("btn-close-blockage-modal");
  const modalBlk = document.getElementById("modal-report-blockage");
  const formBlk = document.getElementById("form-report-blockage");

  if (btnOpenBlk && modalBlk) btnOpenBlk.addEventListener("click", () => modalBlk.classList.remove("hidden"));
  if (btnCloseBlk && modalBlk) btnCloseBlk.addEventListener("click", () => modalBlk.classList.add("hidden"));

  if (formBlk) {
    formBlk.addEventListener("submit", function (e) {
      e.preventDefault();
      const nodeSelect = document.getElementById("select-blockage-node");
      const typeSelect = document.getElementById("select-blockage-type");
      if (!nodeSelect) return;

      const payload = {
        nodeId: nodeSelect.value,
        type: typeSelect ? typeSelect.value : "obstacle",
        description: typeSelect ? typeSelect.options[typeSelect.selectedIndex].text : "Obstruction reported by passenger"
      };

      fetch("/api/blockages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      })
      .then(res => res.json())
      .then(data => {
        alert(`🚨 Blockage report submitted. Reference ID: ${data.id || data.reportId || "BLK-LOCAL"}`);
        appState.blockedNodes.add(payload.nodeId);
        renderSvgMap();
        if (modalBlk) modalBlk.classList.add("hidden");
        if (appState.calculatedRoute) calculateAndDisplayRoute();
      })
      .catch(err => {
        appState.blockedNodes.add(payload.nodeId);
        renderSvgMap();
        alert("🚨 Blockage logged locally (Offline Mode). Map updated.");
        if (modalBlk) modalBlk.classList.add("hidden");
      });
    });
  }

  // QR Checkpoint Modal Handlers
  const btnQrCheckpoint = document.getElementById("btn-qr-checkpoint");
  const modalQrCheckpoint = document.getElementById("modal-qr-checkpoint");
  const btnCloseQrModal = document.getElementById("btn-close-qr-modal");
  const btnApplyQr = document.getElementById("btn-apply-qr");

  if (btnQrCheckpoint && modalQrCheckpoint) {
    btnQrCheckpoint.addEventListener("click", () => modalQrCheckpoint.classList.remove("hidden"));
  }
  if (btnCloseQrModal && modalQrCheckpoint) {
    btnCloseQrModal.addEventListener("click", () => modalQrCheckpoint.classList.add("hidden"));
  }
  if (btnApplyQr && modalQrCheckpoint) {
    btnApplyQr.addEventListener("click", () => {
      const qrTagSelect = document.getElementById("select-qr-tag");
      if (qrTagSelect && qrTagSelect.value) {
        const startSelect = document.getElementById("select-start");
        if (startSelect) {
          startSelect.value = qrTagSelect.value;
          appState.userLocationNodeId = qrTagSelect.value;
          renderUserLocationDot(qrTagSelect.value);

          const statusTag = document.getElementById("location-status-tag");
          if (statusTag) {
            statusTag.className = "location-status-bar status-active";
            statusTag.innerHTML = `📷 <strong>Location Verified:</strong> ${qrTagSelect.options[qrTagSelect.selectedIndex].text} (QR Checkpoint)`;
          }
          alert(`📷 Location Verified via QR Checkpoint: ${qrTagSelect.options[qrTagSelect.selectedIndex].text}`);
        }
      }
      modalQrCheckpoint.classList.add("hidden");
    });
  }

  // Help Assistance Form
  const helpForm = document.getElementById("assistance-form");
  const modalConfirm = document.getElementById("modal-request-confirm");
  const btnCloseConfirm = document.getElementById("btn-close-req-confirm");

  if (helpForm) {
    helpForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("txt-passenger-name")?.value || "Passenger";
      const phone = document.getElementById("txt-passenger-phone")?.value || "";
      const loc = document.getElementById("select-help-location")?.value || "entrance";
      const type = document.getElementById("select-help-type")?.value || "wheelchair";
      const details = document.getElementById("txt-help-details")?.value || "";

      const payload = {
        passengerName: name,
        phone: phone,
        location: loc,
        platform: loc,
        type: type,
        details: details
      };

      fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      })
      .then(res => res.json())
      .then(data => {
        const refEl = document.getElementById("lbl-req-ref-id");
        if (refEl) refEl.textContent = data.id || data.requestId || "REQ-LOCAL";
        if (modalConfirm) modalConfirm.classList.remove("hidden");
      })
      .catch(err => {
        const refEl = document.getElementById("lbl-req-ref-id");
        if (refEl) refEl.textContent = `REQ-${Math.floor(10000 + Math.random() * 90000)} (Offline)`;
        if (modalConfirm) modalConfirm.classList.remove("hidden");
      });
    });
  }

  if (btnCloseConfirm && modalConfirm) {
    btnCloseConfirm.addEventListener("click", () => modalConfirm.classList.add("hidden"));
  }

  // Staff Portal Login
  const btnStaffLoginNav = document.getElementById("btn-open-staff-login");
  const modalStaffLogin = document.getElementById("modal-staff-login");
  const btnCloseStaffLogin = document.getElementById("btn-close-staff-login");
  const formStaffLogin = document.getElementById("form-staff-login");

  if (btnStaffLoginNav && modalStaffLogin) {
    btnStaffLoginNav.addEventListener("click", () => modalStaffLogin.classList.remove("hidden"));
  }
  if (btnCloseStaffLogin && modalStaffLogin) {
    btnCloseStaffLogin.addEventListener("click", () => modalStaffLogin.classList.add("hidden"));
  }

  if (formStaffLogin) {
    formStaffLogin.addEventListener("submit", function (e) {
      e.preventDefault();
      const userVal = document.getElementById("txt-staff-user")?.value;
      const passVal = document.getElementById("txt-staff-pass")?.value;

      fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: userVal, password: passVal })
      })
      .then(res => {
        if (!res.ok) throw new Error("Invalid staff credentials");
        return res.json();
      })
      .then(data => {
        appState.staffToken = data.token;
        appState.staffUser = data.user;
        alert(`✅ Staff Login Successful! Welcome ${data.user.username}`);
        if (modalStaffLogin) modalStaffLogin.classList.add("hidden");
        const staffTab = document.getElementById("tab-staff");
        if (staffTab) staffTab.classList.remove("hidden");
        switchTab("view-staff");
        loadStaffDashboardData();
      })
      .catch(err => {
        alert("❌ Authentication Failed: Invalid username or password.");
      });
    });
  }

  // Staff Dashboard Tabs & Logout
  const btnTabRequests = document.getElementById("btn-tab-requests");
  const btnTabBlockages = document.getElementById("btn-tab-blockages");
  const panelRequests = document.getElementById("staff-requests-panel");
  const panelBlockages = document.getElementById("staff-blockages-panel");
  const btnStaffLogout = document.getElementById("btn-staff-logout");

  if (btnTabRequests && btnTabBlockages) {
    btnTabRequests.addEventListener("click", () => {
      btnTabRequests.classList.add("active");
      btnTabBlockages.classList.remove("active");
      if (panelRequests) panelRequests.classList.remove("hidden");
      if (panelBlockages) panelBlockages.classList.add("hidden");
    });
    btnTabBlockages.addEventListener("click", () => {
      btnTabBlockages.classList.add("active");
      btnTabRequests.classList.remove("active");
      if (panelBlockages) panelBlockages.classList.remove("hidden");
      if (panelRequests) panelRequests.classList.add("hidden");
    });
  }

  if (btnStaffLogout) {
    btnStaffLogout.addEventListener("click", () => {
      appState.staffToken = null;
      appState.staffUser = null;
      const staffTab = document.getElementById("tab-staff");
      if (staffTab) staffTab.classList.add("hidden");
      switchTab("view-home");
      alert("🔒 Staff logged out successfully.");
    });
  }
}

// --------------------------------------------------------------------------
// 18. STAFF DASHBOARD REST DATA FETCH & UPDATES
// --------------------------------------------------------------------------
function loadStaffDashboardData() {
  const reqTbody = document.getElementById("tbl-requests-body");
  const blkTbody = document.getElementById("tbl-blockages-body");
  const countReqEl = document.getElementById("count-requests");
  const countBlkEl = document.getElementById("count-blockages");

  if (!appState.staffToken) {
    if (reqTbody) reqTbody.innerHTML = `<tr><td colspan="9" class="text-muted text-center">Please login as station staff to view active requests.</td></tr>`;
    return;
  }

  // Fetch Assistance Requests
  fetch("/api/requests", {
    headers: { "Authorization": `Bearer ${appState.staffToken}` }
  })
  .then(res => res.json())
  .then(requests => {
    if (countReqEl) countReqEl.textContent = requests.length;
    if (!reqTbody) return;
    if (!requests || requests.length === 0) {
      reqTbody.innerHTML = `<tr><td colspan="9" class="text-muted text-center">No pending passenger requests at this time.</td></tr>`;
      return;
    }

    reqTbody.innerHTML = requests.map(r => {
      const reqId = r.id || r.requestId || "REQ-0";
      const pName = r.passengerName || "Passenger";
      const pPhone = r.phone || "N/A";
      const reqType = r.type || r.assistanceType || "general";
      const loc = r.location || r.locationId || "Station";
      const dt = r.createdAt || "Just now";
      const st = r.status || "Pending";
      const details = r.details || r.notes || "None";
      return `
        <tr>
          <td><strong>${reqId}</strong></td>
          <td>${pName}</td>
          <td>${pPhone}</td>
          <td><span class="status-chip">${reqType}</span></td>
          <td>${loc}</td>
          <td>${details}</td>
          <td>${dt}</td>
          <td><span class="status-chip ${st.toLowerCase()}">${st}</span></td>
          <td>
            <button class="btn btn-sm btn-secondary btn-update-req" data-id="${reqId}" data-status="In Progress">Assign</button>
            <button class="btn btn-sm btn-primary btn-update-req" data-id="${reqId}" data-status="Completed">Complete</button>
          </td>
        </tr>
      `;
    }).join('');

    document.querySelectorAll(".btn-update-req").forEach(btn => {
      btn.addEventListener("click", function () {
        const id = this.getAttribute("data-id");
        const newStatus = this.getAttribute("data-status");
        updateRequestStatus(id, newStatus);
      });
    });
  })
  .catch(err => {
    if (reqTbody) reqTbody.innerHTML = `<tr><td colspan="9" class="text-danger text-center">Failed to load requests from server.</td></tr>`;
  });

  // Fetch Blockage Reports
  fetch("/api/blockages", {
    headers: { "Authorization": `Bearer ${appState.staffToken}` }
  })
  .then(res => res.json())
  .then(blockages => {
    if (countBlkEl) countBlkEl.textContent = blockages.length;
    if (!blkTbody) return;
    if (!blockages || blockages.length === 0) {
      blkTbody.innerHTML = `<tr><td colspan="7" class="text-muted text-center">No reported hazards or blockages.</td></tr>`;
      return;
    }

    blkTbody.innerHTML = blockages.map(b => {
      const blkId = b.id || b.reportId || "BLK-0";
      const nId = b.nodeId || "Location";
      const bType = b.type || "Hazard";
      const desc = b.description || "No details";
      const repAt = b.reportedAt || "Just now";
      const st = b.status || "Reported";
      return `
        <tr>
          <td><strong>${blkId}</strong></td>
          <td>${nId}</td>
          <td>${bType}</td>
          <td>${desc}</td>
          <td>${repAt}</td>
          <td><span class="status-chip ${st.toLowerCase()}">${st}</span></td>
          <td>
            <button class="btn btn-sm btn-warning btn-update-blk" data-id="${blkId}" data-status="Verified">Verify & Block</button>
            <button class="btn btn-sm btn-success btn-update-blk" data-id="${blkId}" data-status="Resolved">Resolve</button>
          </td>
        </tr>
      `;
    }).join('');

    document.querySelectorAll(".btn-update-blk").forEach(btn => {
      btn.addEventListener("click", function () {
        const id = this.getAttribute("data-id");
        const newStatus = this.getAttribute("data-status");
        updateBlockageStatus(id, newStatus);
      });
    });
  })
  .catch(err => {
    if (blkTbody) blkTbody.innerHTML = `<tr><td colspan="7" class="text-danger text-center">Failed to load blockage reports.</td></tr>`;
  });
}

function updateRequestStatus(requestId, status) {
  fetch(`/api/requests/${requestId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${appState.staffToken}`
    },
    body: JSON.stringify({ status })
  })
  .then(res => res.json())
  .then(data => {
    loadStaffDashboardData();
  });
}

function updateBlockageStatus(reportId, status) {
  fetch(`/api/blockages/${reportId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${appState.staffToken}`
    },
    body: JSON.stringify({ status })
  })
  .then(res => res.json())
  .then(data => {
    if (status === "Verified" && data.nodeId) {
      appState.blockedNodes.add(data.nodeId);
    } else if (status === "Resolved" && data.nodeId) {
      appState.blockedNodes.delete(data.nodeId);
    }
    renderSvgMap();
    if (appState.calculatedRoute) calculateAndDisplayRoute();
    loadStaffDashboardData();
  });
}