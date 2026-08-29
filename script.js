document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('main-header');
  const menuToggle = document.getElementById('menu-toggle');
  const navContainer = document.getElementById('nav-container');
  const navLinks = document.querySelectorAll('.nav-link');
  const langButtons = document.querySelectorAll('.lang-btn');

  // 1. Sombra de la cabecera al hacer scroll
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    });
  }

  // 2. Menú móvil
  if (menuToggle && navContainer) {
    menuToggle.addEventListener('click', () => {
      navContainer.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navContainer.classList.remove('active');
      });
    });
  }

  // ================= 3. SISTEMA DE TRADUCCIÓN & DICCIONARIO (i18n) =================

  const translations = {
    // -------------------------------------------------------------
    // // HEADER & NAVEGACIÓN GLOBAL (Compartido en todas las páginas)
    // -------------------------------------------------------------
    nav_home: {
      en: "Home",
      pl: "Strona Główna",
      de: "Startseite"
    },
    nav_concerts: {
      en: "Concerts & Tickets",
      pl: "Koncerty i Bilety",
      de: "Konzerte & Tickets"
    },
    nav_programs: {
      en: "Programs",
      pl: "Programy",
      de: "Programme"
    },
    nav_weddings: {
      en: "Weddings",
      pl: "Śluby",
      de: "Hochzeiten"
    },
    nav_contact: {
      en: "Contact",
      pl: "Kontakt",
      de: "Kontakt"
    },
    btn_book_weddings: {
      en: "Book Weddings",
      pl: "Rezerwuj Ślub",
      de: "Hochzeit Buchen"
    },

    // -------------------------------------------------------------
    // // FOOTER GLOBAL (Compartido en todas las páginas)
    // -------------------------------------------------------------
    footer_tagline: {
      en: "A professional European string quartet specializing in chamber concert seasons, high-end private galas, and bespoke studio recordings.",
      pl: "Profesjonalny europejski kwartet smyczkowy specjalizujący się w koncertach kameralnych, ekskluzywnych galach prywatnych i nagraniach studyjnych.",
      de: "Ein professionelles europäisches Streichquartett, spezialisiert auf Kammermusiksaisons, exklusive Privatgalas und Studioaufnahmen."
    },
    footer_inquiries_title: {
      en: "Inquiries & Management",
      pl: "Zapytania i Impresariat",
      de: "Anfragen & Management"
    },
    footer_link_packages: {
      en: "Wedding Packages",
      pl: "Pakiety Ślubne",
      de: "Hochzeitspakete"
    },
    footer_link_contact: {
      en: "General Contact",
      pl: "Kontakt Ogólny",
      de: "Allgemeiner Kontakt"
    },
    footer_connect_title: {
      en: "Connect & Follow",
      pl: "Obserwuj Nas",
      de: "Folgen Sie Uns"
    },
    footer_rights: {
      en: "© 2026 Golden Star String Quartet. All rights reserved.",
      pl: "© 2026 Golden Star String Quartet. Wszelkie prawa zastrzeżone.",
      de: "© 2026 Golden Star String Quartet. Alle Rechte vorbehalten."
    },
    footer_design_by: {
      en: "Web Design by",
      pl: "Projekt strony:",
      de: "Webdesign von"
    },

    // -------------------------------------------------------------
    // // BOTONES Y ACCIONES GLOBALES RECURRENTES
    // -------------------------------------------------------------
    btn_view_dates: {
      en: "View Tour Dates",
      pl: "Zobacz Daty Trasy",
      de: "Tourdaten Ansehen"
    },
    btn_buy_tickets: {
      en: "Buy Tickets",
      pl: "Kup Bilety",
      de: "Tickets Kaufen"
    },
    btn_contact_booking: {
      en: "Contact for Tickets",
      pl: "Kontakt w Sprawie Biletów",
      de: "Kontakt für Tickets"
    },
    badge_presale_active: {
      en: "Official Presale Active",
      pl: "Oficjalna Przedsprzedaż Aktywna",
      de: "Offizieller Vorverkauf Aktiv"
    },
    badge_presale_soon: {
      en: "Presale Opening Soon",
      pl: "Przedsprzedaż Wkrótce",
      de: "Vorverkauf Startet In Kürze"
    },
    lightbox_expand: {
      en: "🔍 Click to Expand",
      pl: "🔍 Kliknij, aby powiększyć",
      de: "🔍 Klicken zum Vergrößern"
    },


    // =============================================================
    // // INDEX.HTML
    // =============================================================

    // Hero Section
    index_hero_tagline: {
      en: "Bespoke String Quartet & Concert Experiences",
      pl: "Ekskluzywny Kwartet Smyczkowy i Doświadczenia Koncertowe",
      de: "Exklusives Streichquartett & Konzerterlebnisse"
    },
    index_hero_title: {
      en: "Golden Star Quartet",
      pl: "Golden Star Quartet",
      de: "Golden Star Quartet"
    },
    index_hero_desc: {
      en: "Luminous chamber music crafted with aristocratic elegance, warm acoustic brilliance, and timeless emotional depth.",
      pl: "Świetlista muzyka kameralna stworzona z arystokratyczną elegancją, ciepłym blaskiem akustycznym i ponadczasową głębią emocjonalną.",
      de: "Brillante Kammermusik, dargeboten mit aristokratischer Eleganz, warmer akustischer Brillanz und zeitloser emotionaler Tiefe."
    },

    // Intro / About Section
    index_intro_btn_book: {
      en: "Book the Ensemble",
      pl: "Zarezerwuj Zespół",
      de: "Ensemble Buchen"
    },
    index_intro_text: {
      en: "Composed of distinguished conservatory-trained musicians, Golden Star String Quartet merges classical prestige with contemporary refinement. From the sublime architecture of Haydn and Beethoven to intimate Cinematic film scores and bespoke bridal arrangements, we curate sublime sonic atmospheres for concert halls, international festivals, and prestigious private estates across Europe.",
      pl: "Złożony z wybitnych muzyków z wykształceniem konserwatoryjnym, Kwartet Smyczkowy Golden Star łączy klasyczny prestiż ze współczesną finezją. Od wzniosłej architektury Haydna i Beethovena po intymne ścieżki dźwiękowe kina i dedykowane aranżacje ślubne – tworzymy wyjątkową oprawę dźwiękową dla sal koncertowych, międzynarodowych festiwali i prestiżowych posiadłości w całej Europie.",
      de: "Bestehend aus herausragenden, an renommierten Konservatorien ausgebildeten Musikern, verbindet das Golden Star Streichquartett klassisches Renommee mit zeitgenössischer Raffinesse. Von der erhabenen Architektur Haydns und Beethovens bis hin zu intimer Filmmusik und maßgeschneiderten Hochzeitsarrangements schaffen wir erlesene Klangwelten für Konzertsäle, internationale Festivals und exklusive Privatanwesen in ganz Europa."
    },

    // Featured Special Production (Nosferatu)
    index_nosferatu_badge: {
      en: "Special Production & Silent Cine-Concert",
      pl: "Specjalna Produkcja i Seans Kina Niemego z Muzyką na Żywo",
      de: "Sonderproduktion & Stummfilm-Kinekonzert"
    },
    index_nosferatu_title: {
      en: "Nosferatu: A Symphony of Horror",
      pl: "Nosferatu: Symfonia Grozy",
      de: "Nosferatu: Eine Symphonie des Grauens"
    },
    index_nosferatu_desc: {
      en: "Dark atmosphere, suspense, and the hypnotic beauty of classical music unite in this extraordinary live cine-concert (~65 mins). Experience F.W. Murnau’s legendary Expressionist silent film accompanied live by the Golden Star Ensemble (string sextet & piano) led by conductor Katarzyna Marek, performing a specialized interpretation of Johannes Brahms.",
      pl: "Mroczna atmosfera, napięcie i hipnotyzujące piękno muzyki klasycznej łączą się w tym niezwykłym koncercie filmowym na żywo (~65 min). Zobacz legendarne ekspresjonistyczne arcydzieło kina niemego F.W. Murnaua z muzyką na żywo w wykonaniu Golden Star Ensemble (sekstet smyczkowy i fortepian) pod batutą Katarzyny Marek w specjalnej interpretacji dzieł Johannesa Brahmsa.",
      de: "Dunkle Atmosphäre, Hochspannung und die hypnotische Schönheit klassischer Musik vereinen sich in diesem außergewöhnlichen Live-Kinekonzert (~65 Min.). Erleben Sie F.W. Murnaus legendäres expressionistisches Stummfilm-Meisterwerk, live begleitet vom Golden Star Ensemble (Streichsextett & Klavier) unter der Leitung von Dirigentin Katarzyna Marek mit einer Bearbeitung der Musik von Johannes Brahms."
    },
    index_nosferatu_btn_dates: {
      en: "View Tour Dates & Tickets",
      pl: "Zobacz Daty Trasy i Bilety",
      de: "Tourdaten & Tickets Ansehen"
    },
    index_nosferatu_btn_dossier: {
      en: "Full Production Dossier & Cast →",
      pl: "Pełne Dossier Produkcji i Obsada →",
      de: "Vollständiges Produktionsdossier & Besetzung →"
    },

    // Section Posters: Titles & Shared Button
    index_posters_uptitle: {
      en: "Live On Tour 2026",
      pl: "Na Żywo w Trasie 2026",
      de: "Live auf Tournee 2026"
    },
    index_posters_main_title: {
      en: "Upcoming Concert Productions",
      pl: "Nadchodzące Produkcje Koncertowe",
      de: "Aktuelle Konzertproduktionen"
    },
    index_btn_view_dates_tickets: {
      en: "View Dates & Tickets",
      pl: "Zobacz Daty i Bilety",
      de: "Termine & Tickets Ansehen"
    },

    // Poster 1: Tribute to Hans Zimmer
    index_p1_badge: {
      en: "Cinematic Series",
      pl: "Seria Muzyki Filmowej",
      de: "Filmmusik-Reihe"
    },
    index_p1_title: {
      en: "Tribute to Hans Zimmer",
      pl: "Tribute to Hans Zimmer",
      de: "Tribute to Hans Zimmer"
    },
    index_p1_subtitle: {
      en: "Interstellar, Gladiator & Inception ft. Joanna Sinkiewicz",
      pl: "Interstellar, Gladiator & Inception gościnnie Joanna Sinkiewicz",
      de: "Interstellar, Gladiator & Inception feat. Joanna Sinkiewicz"
    },
    index_p1_meta: {
      en: "Szczecin (Oct 15) • European Tour",
      pl: "Szczecin (15 Paź) • Trasa Europejska",
      de: "Stettin (15. Okt) • Europatournee"
    },
    index_p1_btn_dossier: {
      en: "Program Dossier →",
      pl: "Dossier Programu →",
      de: "Programmdossier →"
    },

    // Poster 2: Best of Michael Jackson
    index_p2_badge: {
      en: "Pop Crossover",
      pl: "Crossover Popowy",
      de: "Pop Crossover"
    },
    index_p2_title: {
      en: "Best of Michael Jackson",
      pl: "Best of Michael Jackson",
      de: "Best of Michael Jackson"
    },
    index_p2_subtitle: {
      en: "Billie Jean, Thriller & Smooth Criminal on Strings",
      pl: "Billie Jean, Thriller & Smooth Criminal na Smyczkach",
      de: "Billie Jean, Thriller & Smooth Criminal auf Streichern"
    },
    index_p2_meta: {
      en: "Szczecin (Nov 10) • European Tour",
      pl: "Szczecin (10 Lis) • Trasa Europejska",
      de: "Stettin (10. Nov) • Europatournee"
    },
    index_p2_btn_dossier: {
      en: "Program Dossier →",
      pl: "Dossier Programu →",
      de: "Programmdossier →"
    },

    // Poster 3: Classical Masterpieces
    index_p3_badge: {
      en: "Masterworks Series",
      pl: "Seria Arcydzieł",
      de: "Meisterwerk-Reihe"
    },
    index_p3_title: {
      en: "Classical Masterpieces",
      pl: "Arcydzieła Klasyki",
      de: "Klassische Meisterwerke"
    },
    index_p3_subtitle: {
      en: "Dvořák, Schubert & Ravel in Concert",
      pl: "Dvořák, Schubert i Ravel w Koncercie",
      de: "Dvořák, Schubert & Ravel im Konzert"
    },
    index_p3_meta: {
      en: "Tour dates to be announced",
      pl: "Daty trasy zostaną ogłoszone wkrótce",
      de: "Tourdaten werden in Kürze bekanntgegeben"
    },
    index_p3_btn_programs: {
      en: "Chamber Programs →",
      pl: "Programy Kameralne →",
      de: "Kammerprogramme →"
    },

    // General Programs / Services Section
    index_services_uptitle: {
      en: "Bespoke Event Formats",
      pl: "Ekskluzywne Formaty Wydarzeń",
      de: "Exklusive Eventformate"
    },
    index_services_main_title: {
      en: "Private & Chamber Services",
      pl: "Usługi Prywatne i Kameralne",
      de: "Private & Kammermusikalische Dienstleistungen"
    },
    index_service1_title: {
      en: "Weddings & Aristocratic Galas",
      pl: "Śluby i Ekskluzywne Gale",
      de: "Hochzeiten & Aristokratische Galas"
    },
    index_service1_desc: {
      en: "Tailored pop acoustic arrangements, Bridgerton-style covers, and romantic masterworks for luxury celebrations.",
      pl: "Dedykowane akustyczne aranżacje popowe, covery w stylu Bridgertonów i romantyczne arcydzieła na luksusowe uroczystości.",
      de: "Maßgeschneiderte akustische Pop-Arrangements, Bridgerton-Stil-Cover und romantische Meisterwerke für anspruchsvolle Feierlichkeiten."
    },
    index_service1_btn: {
      en: "Explore Wedding Packages",
      pl: "Zobacz Pakiety Ślubne",
      de: "Hochzeitspakete Ansehen"
    },
    index_service2_title: {
      en: "Festivals & Recitals",
      pl: "Festiwale i Recitale",
      de: "Festivals & Rezitale"
    },
    index_service2_desc: {
      en: "Philharmonic acoustics and international chamber festivals with complete quartet cycles.",
      pl: "Filharmoniczna akustyka i międzynarodowe festiwale kameralne z kompletnymi cyklami kwartetowymi.",
      de: "Philharmonische Akustik und internationale Kammermusikfestivals mit vollständigen Quartettzyklen."
    },
    index_service2_btn: {
      en: "Program Notes & Inquiries",
      pl: "Opisy Programów i Zapytania",
      de: "Programmhefte & Anfragen"
    },

    // =============================================================
    // // TOUR-DATES.HTML
    // =============================================================

    // Header & Filter Tabs
    tour_back_link: {
      en: "← Back to Overview",
      pl: "← Powrót do przeglądu",
      de: "← Zurück zur Übersicht"
    },
    tour_hero_badge: {
      en: "European Tour 2026",
      pl: "Trasa Europejska 2026",
      de: "Europatournee 2026"
    },
    tour_hero_title: {
      en: "Tour Dates & Concert Schedules",
      pl: "Daty Trasy i Harmonogram Koncertów",
      de: "Tourdaten & Konzerttermine"
    },
    tour_hero_desc: {
      en: "Select a production category to view dates, venue details, and book your tickets.",
      pl: "Wybierz kategorię produkcji, aby zobaczyć daty, szczegóły sal i zarezerwować bilety.",
      de: "Wählen Sie eine Produktionskategorie, um Termine und Spielorte einzusehen und Tickets zu buchen."
    },
    tour_filter_all: {
      en: "All Concerts",
      pl: "Wszystkie Koncerty",
      de: "Alle Konzerte"
    },
    tour_filter_nosferatu: {
      en: "Nosferatu Live",
      pl: "Nosferatu na Żywo",
      de: "Nosferatu Live"
    },
    tour_filter_soundtracks: {
      en: "Soundtracks & Strings",
      pl: "Muzyka Filmowa i Smyczki",
      de: "Soundtracks & Streicher"
    },

    // Accordion Global Labels
    tour_venue_title: {
      en: "Venue & Schedule",
      pl: "Miejsce i Harmonogram",
      de: "Spielort & Zeitplan"
    },
    tour_lbl_venue: {
      en: "Venue:",
      pl: "Miejsce:",
      de: "Spielort:"
    },
    tour_lbl_address: {
      en: "Address:",
      pl: "Adres:",
      de: "Adresse:"
    },
    tour_lbl_starts: {
      en: "Concert Starts:",
      pl: "Początek koncertu:",
      de: "Konzertbeginn:"
    },
    tour_lbl_screening_score: {
      en: "Screening & Live Score:",
      pl: "Projekcja i Muzyka na Żywo:",
      de: "Filmvorführung & Live-Musik:"
    },
    tour_lbl_screening_starts: {
      en: "Screening Starts:",
      pl: "Początek seansu:",
      de: "Beginn der Vorführung:"
    },

    // Date 1: Hans Zimmer Szczecin (OCT 15)
    tour_d1_date: {
      en: "OCT 15, 2026",
      pl: "15 PAŹ 2026",
      de: "15. OKT 2026"
    },
    tour_d1_city: {
      en: "Szczecin, Poland",
      pl: "Szczecin, Polska",
      de: "Stettin, Polen"
    },
    tour_d1_tag: {
      en: "Tribute to Hans Zimmer ft. Joanna Sinkiewicz",
      pl: "Tribute to Hans Zimmer gościnnie Joanna Sinkiewicz",
      de: "Tribute to Hans Zimmer feat. Joanna Sinkiewicz"
    },
    tour_d1_note: {
      en: "Featuring guest vocalist Joanna Sinkiewicz performing Interstellar, Gladiator, and Inception themes with the Golden Star Quartet.",
      pl: "Z gościnnym udziałem wokalistki Joanny Sinkiewicz wykonującej motywy z filmów Interstellar, Gladiator i Incepcja wraz z Golden Star Quartet.",
      de: "Mit Gastsängerin Joanna Sinkiewicz, die Themen aus Interstellar, Gladiator und Inception gemeinsam mit dem Golden Star Quartett darbietet."
    },
    tour_btn_buy_ebilet: {
      en: "Buy Tickets on eBilet ↗",
      pl: "Kup Bilety na eBilet ↗",
      de: "Tickets auf eBilet Kaufen ↗"
    },

    // Date 2: Nosferatu Berlin (OCT 28)
    tour_d2_date: {
      en: "OCT 28, 2026",
      pl: "28 PAŹ 2026",
      de: "28. OKT 2026"
    },
    tour_d2_city: {
      en: "Berlin, Germany",
      pl: "Berlin, Niemcy",
      de: "Berlin, Deutschland"
    },
    tour_d2_tag: {
      en: "Nosferatu (1922) Live Cine-Concert",
      pl: "Nosferatu (1922) Koncert Filmowy na Żywo",
      de: "Nosferatu (1922) Live-Kinekonzert"
    },
    tour_d2_note: {
      en: "1922 silent film with string sextet, piano & conductor Katarzyna Marek performing Johannes Brahms (~65 mins).",
      pl: "Film niemy z 1922 roku z sekstetem smyczkowym, fortepianem i dyrygentką Katarzyną Marek wykonującą utwory Johannesa Brahmsa (~65 min).",
      de: "Stummfilm von 1922 mit Streichsextett, Klavier und Dirigentin Katarzyna Marek mit Musik von Johannes Brahms (~65 Min.)."
    },
    tour_btn_buy_eventfrog: {
      en: "Buy Tickets on Eventfrog ↗",
      pl: "Kup Bilety na Eventfrog ↗",
      de: "Tickets auf Eventfrog Kaufen ↗"
    },

    // Date 3: Nosferatu Toruń (OCT 29)
    tour_d3_date: {
      en: "OCT 29, 2026",
      pl: "29 PAŹ 2026",
      de: "29. OKT 2026"
    },
    tour_d3_city: {
      en: "Toruń, Poland",
      pl: "Toruń, Polska",
      de: "Thorn, Polen"
    },
    tour_d3_tag: {
      en: "Nosferatu (1922) Live Cine-Concert",
      pl: "Nosferatu (1922) Koncert Filmowy na Żywo",
      de: "Nosferatu (1922) Live-Kinekonzert"
    },
    tour_d3_note: {
      en: "Gothic atmosphere under ambient candlelit stage setup.",
      pl: "Gotycka atmosfera w nastrojowej oprawie scenicznej przy świecach.",
      de: "Gotische Atmosphäre mit stimmungsvoller Kerzenlicht-Bühnenbeleuchtung."
    },

    // Date 4: Nosferatu Poznań (OCT 30)
    tour_d4_date: {
      en: "OCT 30, 2026",
      pl: "30 PAŹ 2026",
      de: "30. OKT 2026"
    },
    tour_d4_city: {
      en: "Poznań, Poland",
      pl: "Poznań, Polska",
      de: "Posen, Polen"
    },
    tour_d4_tag: {
      en: "Nosferatu (1922) Live Cine-Concert",
      pl: "Nosferatu (1922) Koncert Filmowy na Żywo",
      de: "Nosferatu (1922) Live-Kinekonzert"
    },
    tour_d4_note: {
      en: "Expressionist silent cine-concert with augmented chamber sextet and piano.",
      pl: "Ekspresjonistyczny seans kina niemego z rozszerzonym sekstetem kameralnym i fortepianem.",
      de: "Expressionistisches Stummfilm-Kinekonzert mit erweitertem Kammersextett und Klavier."
    },

    // Date 5: Nosferatu Wrocław (OCT 31)
    tour_d5_date: {
      en: "OCT 31, 2026",
      pl: "31 PAŹ 2026",
      de: "31. OKT 2026"
    },
    tour_d5_city: {
      en: "Wrocław, Poland",
      pl: "Wrocław, Polska",
      de: "Breslau, Polen"
    },
    tour_d5_tag: {
      en: "Nosferatu Halloween Cine-Concert",
      pl: "Nosferatu Halloweenowy Koncert Filmowy",
      de: "Nosferatu Halloween-Kinekonzert"
    },
    tour_d5_note: {
      en: "Special Halloween evening screening with live musical narrative conducted by Katarzyna Marek.",
      pl: "Specjalny wieczorny pokaz halloweenowy z narracją muzyczną na żywo pod batutą Katarzyny Marek.",
      de: "Besondere Halloween-Abendvorführung mit live dirigierter musikalischer Erzählung von Katarzyna Marek."
    },

    // Date 6: Michael Jackson Szczecin (NOV 10)
    tour_d6_date: {
      en: "NOV 10, 2026",
      pl: "10 LIS 2026",
      de: "10. NOV 2026"
    },
    tour_d6_city: {
      en: "Szczecin, Poland",
      pl: "Szczecin, Polska",
      de: "Stettin, Polen"
    },
    tour_d6_tag: {
      en: "Best of Michael Jackson (Pop on Strings)",
      pl: "Best of Michael Jackson (Pop na Smyczkach)",
      de: "Best of Michael Jackson (Pop auf Streichern)"
    },
    tour_d6_note: {
      en: "Iconic hits (Billie Jean, Smooth Criminal, Thriller, Beat It) in high-energy classical quartet arrangements.",
      pl: "Kultowe hity (Billie Jean, Smooth Criminal, Thriller, Beat It) w pełnych energii aranżacjach na kwartet smyczkowy.",
      de: "Ikonische Hits (Billie Jean, Smooth Criminal, Thriller, Beat It) in energiegeladenen Arrangements für Streichquartett."
    },
    tour_btn_buy_jazzment: {
      en: "Buy Tickets on Jazzment Tixx ↗",
      pl: "Kup Bilety na Jazzment Tixx ↗",
      de: "Tickets auf Jazzment Tixx Kaufen ↗"
    },

    // =============================================================
    // // PROGRAMS.HTML
    // =============================================================

    // Hero Section
    programs_hero_badge: {
      en: "Artistic Repertoire & Touring Productions",
      pl: "Repertuar Artystyczny i Produkcje Koncertowe",
      de: "Künstlerisches Repertoire & Tourneeproduktionen"
    },
    programs_hero_title: {
      en: "Concert Programs",
      pl: "Programy Koncertowe",
      de: "Konzertprogramme"
    },
    programs_hero_desc: {
      en: "From silent cinema live-accompaniments to cinematic homages, pop crossover, and philharmonic chamber masterworks.",
      pl: "Od pokazów kina niemego z muzyką na żywo po hołdy filmowe, crossover popowy i filharmoniczne arcydzieła kameralne.",
      de: "Von Stummfilm-Kinekonzerten über filmische Hommagen und Pop-Crossover bis hin zu philharmonischen Kammermusik-Meisterwerken."
    },

    // Global Labels in Programs
    prog_cast_highlights_title: {
      en: "Cast & Production Highlights",
      pl: "Obsada i Główne Punkty Produkcji",
      de: "Besetzung & Produktions-Highlights"
    },
    prog_prod_highlights_title: {
      en: "Production Highlights",
      pl: "Główne Punkty Produkcji",
      de: "Produktions-Highlights"
    },
    prog_btn_full_dossier: {
      en: "Full Production Dossier →",
      pl: "Pełne Dossier Produkcji →",
      de: "Vollständiges Produktionsdossier →"
    },

    // Program 1: Nosferatu
    prog_nosferatu_badge: {
      en: "Special Cine-Concert",
      pl: "Specjalny Koncert Filmowy",
      de: "Besonderes Kinekonzert"
    },
    prog_nosferatu_tag: {
      en: "Cinema in Concert",
      pl: "Kino z Muzyką na Żywo",
      de: "Kino im Konzert"
    },
    prog_nosferatu_duration: {
      en: "Duration: ~65 mins (String Sextet + Piano)",
      pl: "Czas trwania: ~65 min (Sekstet smyczkowy + Fortepian)",
      de: "Dauer: ~65 Min. (Streichsextett + Klavier)"
    },
    prog_nosferatu_title: {
      en: "Nosferatu: A Symphony of Horror (1922)",
      pl: "Nosferatu: Symfonia Grozy (1922)",
      de: "Nosferatu: Eine Symphonie des Grauens (1922)"
    },
    prog_nosferatu_lead: {
      en: "Live Silent Film Screening with Johannes Brahms Score & Live Conductor",
      pl: "Pokaz filmu niemego z muzyką Johannesa Brahmsa na żywo i dyrygentem",
      de: "Stummfilmvorführung mit Musik von Johannes Brahms & Live-Dirigentin"
    },
    prog_nosferatu_desc: {
      en: "F.W. Murnau's 1922 Expressionist masterpiece performed with live chamber accompaniment (string sextet and piano) under conductor Katarzyna Marek. A dark, hypnotic encounter between German Expressionism and Romanticism.",
      pl: "Ekspresjonistyczne arcydzieło F.W. Murnaua z 1922 roku wykonywane z akompaniamentem kameralnym na żywo (sekstet smyczkowy i fortepian) pod dyrekcją Katarzyny Marek. Mroczne, hipnotyzujące spotkanie niemieckiego ekspresjonizmu z romantyzmem.",
      de: "F.W. Murnaus expressionistisches Meisterwerk von 1922, dargeboten mit Live-Kammerbegleitung (Streichsextett und Klavier) unter der Leitung von Dirigentin Katarzyna Marek. Eine düstere, hypnotische Begegnung zwischen deutschem Expressionismus und Romantik."
    },
    prog_nosferatu_hl1: {
      en: "Conducted by Katarzyna Marek (Augmented Sextet & Piano)",
      pl: "Dyryguje Katarzyna Marek (Rozszerzony Sekstet i Fortepian)",
      de: "Dirigiert von Katarzyna Marek (Erweitertes Sextett & Klavier)"
    },
    prog_nosferatu_hl2: {
      en: "Restored 1922 archival screening synchronized with Brahms repertoire",
      pl: "Zrekonstruowany archiwalny pokaz z 1922 roku zsynchronizowany z repertuarem Brahmsa",
      de: "Restaurierte Archivfassung von 1922, synchronisiert mit dem Repertoire von Brahms"
    },
    prog_nosferatu_hl3: {
      en: "Atmospheric candlelight staging across historic venues",
      pl: "Klimatyczna oprawa przy świecach w zabytkowych wnętrzach",
      de: "Stimmungsvolle Inszenierung im Kerzenschein an historischen Spielorten"
    },

    // Program 2: Tribute to Hans Zimmer
    prog_hz_tag: {
      en: "Hollywood & Epic Scores",
      pl: "Hollywood i Epickie Ścieżki Dźwiękowe",
      de: "Hollywood & Epische Soundtracks"
    },
    prog_hz_duration: {
      en: "Duration: ~80 mins",
      pl: "Czas trwania: ~80 min",
      de: "Dauer: ~80 Min."
    },
    prog_hz_lead: {
      en: "Featuring Special Guest Vocalist Joanna Sinkiewicz",
      pl: "Z udziałem gościa specjalnego: wokalistki Joanny Sinkiewicz",
      de: "Mit besonderem Gast: Sängerin Joanna Sinkiewicz"
    },
    prog_hz_desc: {
      en: "Experience the moving film scores from Gladiator, Inception, Interstellar, The Lion King, James Bond, and Pirates of the Caribbean. The subtle quartet strings and ethereal vocals bring Zimmer's pulsating rhythms to life.",
      pl: "Przeżyj poruszające ścieżki dźwiękowe z filmów Gladiator, Incepcja, Interstellar, Król Lew, James Bond oraz Piraci z Karaibów. Subtelne brzmienie kwartetu smyczkowego i eteryczny wokal ożywiają pulsujące rytmy Zimmera.",
      de: "Erleben Sie die bewegenden Filmmusiken aus Gladiator, Inception, Interstellar, Der König der Löwen, James Bond und Fluch der Karibik. Feine Streicherklänge und ätherischer Gesang erwecken Zimmers pulsierende Rhythmen zum Leben."
    },
    prog_hz_hl1: {
      en: "Guest vocal soloist Joanna Sinkiewicz",
      pl: "Gościnna solistka wokalna Joanna Sinkiewicz",
      de: "Vokalsolistin Joanna Sinkiewicz als Gast"
    },
    prog_hz_hl2: {
      en: "Intimate, intense chamber arrangements of Hollywood's greatest themes",
      pl: "Intymne i pełne ekspresji aranżacje kameralne największych tematów Hollywood",
      de: "Intime, ausdrucksstarke Kammerarrangements der größten Hollywood-Themen"
    },
    prog_hz_hl3: {
      en: "Live in Szczecin (Oct 15) & touring across Europe",
      pl: "Na żywo w Szczecinie (15 paź) oraz w trasie po Europie",
      de: "Live in Stettin (15. Okt) & auf Europatournee"
    },

    // Program 3: Best of Michael Jackson
    prog_mj_tag: {
      en: "King of Pop in Concert",
      pl: "Król Popu w Koncercie",
      de: "King of Pop im Konzert"
    },
    prog_mj_duration: {
      en: "Duration: ~75 mins",
      pl: "Czas trwania: ~75 min",
      de: "Dauer: ~75 Min."
    },
    prog_mj_lead: {
      en: "Billie Jean, Smooth Criminal, Thriller & Beat It on Classical Strings",
      pl: "Billie Jean, Smooth Criminal, Thriller i Beat It na klasycznych smyczkach",
      de: "Billie Jean, Smooth Criminal, Thriller & Beat It auf klassischen Streichern"
    },
    prog_mj_desc: {
      en: "An electrifying concert taking audiences through the King of Pop's greatest hits. Classical poise meets raw rhythmic energy in original string quartet arrangements.",
      pl: "Elektryzujący koncert prowadzący publiczność przez największe przeboje Króla Popu. Klasyczna elegancja łączy się z surową energią rytmiczną w autorskich aranżacjach na kwartet smyczkowy.",
      de: "Ein mitreißendes Konzert mit den größten Hits des King of Pop. Klassische Eleganz trifft auf ungebremste rhythmische Energie in Originalarrangements für Streichquartett."
    },
    prog_mj_hl1: {
      en: "High-energy classical crossover arrangements",
      pl: "Energetyczne aranżacje w stylu classical crossover",
      de: "Hochenergetische Classical-Crossover-Arrangements"
    },
    prog_mj_hl2: {
      en: "Includes Man in the Mirror, Black or White, Thriller and more",
      pl: "W programie m.in. Man in the Mirror, Black or White, Thriller",
      de: "Inklusive Man in the Mirror, Black or White, Thriller und mehr"
    },
    prog_mj_hl3: {
      en: "Live in Szczecin (Nov 10) & touring",
      pl: "Na żywo w Szczecinie (10 lis) oraz w trasie",
      de: "Live in Stettin (10. Nov) & auf Tournee"
    },

    // Program 4: Classical Masterpieces
    prog_classic_tag: {
      en: "Chamber Heritage",
      pl: "Dziedzictwo Muzyki Kameralnej",
      de: "Kammermusikalisches Erbe"
    },
    prog_classic_duration: {
      en: "Duration: ~90 mins (With Intermission)",
      pl: "Czas trwania: ~90 min (z przerwą)",
      de: "Dauer: ~90 Min. (mit Pause)"
    },
    prog_classic_title: {
      en: "Classical Masterpieces: From Vienna to Paris",
      pl: "Arcydzieła Klasyki: Od Wiednia do Paryża",
      de: "Klassische Meisterwerke: Von Wien nach Paris"
    },
    prog_classic_lead: {
      en: "Dvořák, Schubert, Ravel & Beethoven",
      pl: "Dvořák, Schubert, Ravel i Beethoven",
      de: "Dvořák, Schubert, Ravel & Beethoven"
    },
    prog_classic_desc: {
      en: "A rigorous celebration of classical chamber music repertoire. Featuring Antonín Dvořák’s String Quartet No. 12 (\"American\"), Maurice Ravel’s impressionist Quartet in F Major, and select movements from Schubert and Beethoven.",
      pl: "Kunsztowny hołd dla klasycznego repertuaru kameralnego. W programie m.in. Kwartet smyczkowy nr 12 (\"Amerykański\") Antonína Dvořáka, impresjonistyczny Kwartet F-dur Maurice'a Ravela oraz wybrane części z dzieł Schuberta i Beethovena.",
      de: "Eine anspruchsvolle Würdigung des klassischen Kammermusikrepertoires. Mit Antonín Dvořáks Streichquartett Nr. 12 („Amerikanisches\"), Maurice Ravels impressionistischem Quartett in F-Dur sowie ausgewählten Sätzen von Schubert und Beethoven."
    },
    prog_classic_hl1: {
      en: "Pure acoustic chamber performance adhering to historical interpretation",
      pl: "Czysto akustyczne wykonanie kameralne wierne historycznej interpretacji",
      de: "Rein akustische Kammerdarbietung nach historischer Aufführungspraxis"
    },
    prog_classic_hl2: {
      en: "Ideal for international chamber music festivals and philharmonic seasons",
      pl: "Idealne na międzynarodowe festiwale muzyki kameralnej i sezony filharmoniczne",
      de: "Ideal für internationale Kammermusikfestivals und Philharmoniesaisons"
    },
    prog_classic_hl3: {
      en: "Comprehensive program notes provided for venue booklets",
      pl: "Kompletne opisy programu do książeczek koncertowych",
      de: "Ausführliche Werkeinführungen für Programmhefte verfügbar"
    },
    prog_classic_btn_inquire: {
      en: "Inquire for Season Booking",
      pl: "Zapytaj o Rezerwację Sezonu",
      de: "Buchungsanfrage für Saison"
    },

    // Lower Banner: Curated Commissions
    prog_custom_badge: {
      en: "Curated Commissions",
      pl: "Dedykowane Zamówienia",
      de: "Maßgeschneiderte Aufträge"
    },
    prog_custom_title: {
      en: "Looking for a Custom Concert Program?",
      pl: "Szukasz dedykowanego programu koncertowego?",
      de: "Suchen Sie ein individuelles Konzertprogramm?"
    },
    prog_custom_desc: {
      en: "We develop bespoke themed repertoire, private anniversary programs, and studio collaborations on request.",
      pl: "Tworzymy autorski repertuar tematyczny, programy na jubileusze oraz realizujemy projekty studyjne na zamówienie.",
      de: "Wir erarbeiten auf Anfrage individuelle Themenprogramme, Jubiläumskonzerte und Studioprojekte."
    },
    prog_custom_btn: {
      en: "Get in Touch with Management",
      pl: "Skontaktuj się z Impresariatem",
      de: "Kontaktieren Sie das Management"
    },

    // =============================================================
    // // WEDDINGS.HTML
    // =============================================================

    // Hero Section
    wed_hero_tagline: {
      en: "Aristocratic Elegance & Romantic Atmospheres",
      pl: "Arystokratyczna Elegancja i Romantyczna Atmosfera",
      de: "Aristokratische Eleganz & Romantische Atmosphäre"
    },
    wed_hero_title: {
      en: "Bespoke Wedding Music",
      pl: "Ekskluzywna Oprawa Muzyczna Ślubów",
      de: "Exklusive Hochzeitsmusik"
    },
    wed_hero_desc: {
      en: "Elevate your special day with the timeless warmth of live strings. From solemn ceremonial entrances to sparkling Bridgerton-style cocktail hours.",
      pl: "Uświetnij ten wyjątkowy dzień ponadczasowym ciepłem żywych instrumentów smyczkowych. Od uroczystych wejść na ceremonię po energetyczny koktajl w stylu Bridgertonów.",
      de: "Verleihen Sie Ihrem besonderen Tag die zeitlose Wärme von Live-Streichern. Von feierlichen Zeremonie-Einzügen bis hin zum funkelnden Sektempfang im Bridgerton-Stil."
    },
    wed_hero_btn_explore: {
      en: "Explore Packages",
      pl: "Zobacz Pakiety",
      de: "Pakete Entdecken"
    },

    // Collections / Packages Section
    wed_pkg_uptitle: {
      en: "Curated Experiences",
      pl: "Wyselekcjonowane Doświadczenia",
      de: "Erlesene Erlebnisse"
    },
    wed_pkg_main_title: {
      en: "Wedding Collections",
      pl: "Kolekcje Ślubne",
      de: "Hochzeitskollektionen"
    },
    wed_btn_req_avail: {
      en: "Request Availability",
      pl: "Zapytaj o Dostępność",
      de: "Verfügbarkeit Anfragen"
    },

    // Package 1: The Ceremony
    wed_p1_tag: {
      en: "Intimate",
      pl: "Kameralny",
      de: "Intim"
    },
    wed_p1_title: {
      en: "The Ceremony",
      pl: "Ceremonia",
      de: "Die Zeremonie"
    },
    wed_p1_desc: {
      en: "Perfect for couples seeking refined, solemn beauty during their vows.",
      pl: "Idealny dla par pragnących wyrafinowanego, uroczystego piękna podczas składania przysięgi.",
      de: "Perfekt für Paare, die sich für ihr Eheversprechen erlesene, feierliche Eleganz wünschen."
    },
    wed_p1_f1: {
      en: "Guest seating prelude (15–20 mins)",
      pl: "Preludium podczas zajmowania miejsc przez gości (15–20 min)",
      de: "Einlassmusik beim Eintreffen der Gäste (15–20 Min.)"
    },
    wed_p1_f2: {
      en: "Bridal party & bride processional entrance",
      pl: "Uroczyste wejście orszaku i Panny Młodej",
      de: "Feierlicher Einzug von Brautjungfern & Braut"
    },
    wed_p1_f3: {
      en: "Signing of the register & interlude",
      pl: "Podpisanie dokumentów i interludium muzyczne",
      de: "Unterschrift der Urkunden & musikalisches Zwischenspiel"
    },
    wed_p1_f4: {
      en: "Joyful recessional exit",
      pl: "Radosne wyjście Pary Młodej",
      de: "Freudiger Auszug des Brautpaares"
    },
    wed_p1_f5: {
      en: "1 custom song arrangement of your choice",
      pl: "1 dedykowana aranżacja wybranego utworu",
      de: "1 individuelles Wunscharrangement inklusive"
    },

    // Package 2: Ceremony & Cocktail (Featured)
    wed_p2_ribbon: {
      en: "Most Requested",
      pl: "Najczęściej Wybierany",
      de: "Sehr Beliebt"
    },
    wed_p2_tag: {
      en: "Signature",
      pl: "Flagowy",
      de: "Signatur"
    },
    wed_p2_title: {
      en: "Ceremony & Cocktail",
      pl: "Ceremonia i Koktajl",
      de: "Zeremonie & Sektempfang"
    },
    wed_p2_desc: {
      en: "The complete acoustic journey from emotional vows to sparkling reception.",
      pl: "Kompletna podróż akustyczna: od wzruszającej przysięgi po radosne przyjęcie koktajlowe.",
      de: "Die vollständige musikalische Begleitung vom emotionalen Eheversprechen bis zum Sektempfang."
    },
    wed_p2_f1: {
      en: "Full Ceremony coverage (prelude to exit)",
      pl: "Kompletna oprawa Ceremonii (od preludium do wyjścia)",
      de: "Vollständige Begleitung der Zeremonie (Einlass bis Auszug)"
    },
    wed_p2_f2: {
      en: "Up to 90 minutes of Cocktail Hour live music",
      pl: "Do 90 minut muzyki na żywo podczas koktajlu / życzeń",
      de: "Bis zu 90 Minuten Live-Musik beim Sektempfang"
    },
    wed_p2_f3: {
      en: "Vibrant mix of modern pop covers & jazz standards",
      pl: "Energetyczny miks nowoczesnych coverów pop i standardów jazzowych",
      de: "Lebendiger Mix aus modernen Pop-Covern und Jazz-Standards"
    },
    wed_p2_f4: {
      en: "Seamless transition between ceremony and cocktail venues",
      pl: "Płynne przejście między strefą ceremonii a strefą przyjęcia",
      de: "Reibungsloser Wechsel zwischen Trauungsort und Empfang"
    },
    wed_p2_f5: {
      en: "Up to 2 custom song arrangements included",
      pl: "Do 2 dedykowanych aranżacji utworów w cenie",
      de: "Bis zu 2 individuelle Wunscharrangements inklusive"
    },

    // Package 3: The Grand Gala
    wed_p3_tag: {
      en: "All-Inclusive",
      pl: "Kompleksowy",
      de: "All-Inclusive"
    },
    wed_p3_title: {
      en: "The Grand Gala",
      pl: "Wielka Gala",
      de: "Die Große Gala"
    },
    wed_p3_desc: {
      en: "A continuous musical narrative for luxury estate & destination weddings.",
      pl: "Ciągła oprawa muzyczna dla luksusowych wesel w rezydencjach i ślubów wyjazdowych.",
      de: "Eine durchgehende musikalische Erzählung für exklusive Anwesen & Destination Weddings."
    },
    wed_p3_f1: {
      en: "Full Ceremony & extended Cocktail reception",
      pl: "Pełna Ceremonia oraz wydłużone przyjęcie koktajlowe",
      de: "Vollständige Zeremonie & erweiterter Sektempfang"
    },
    wed_p3_f2: {
      en: "Background string accompaniment during Dinner",
      pl: "Klimatyczna muzyka smyczkowa w tle podczas obiadu/kolacji",
      de: "Dezente musikalische Streicherbegleitung während des Dinners"
    },
    wed_p3_f3: {
      en: "Special arrangement for the couple's First Dance",
      pl: "Specjalna aranżacja na Pierwszy Taniec Pary Młodej",
      de: "Besonderes Arrangement für den Eröffnungstanz des Paares"
    },
    wed_p3_f4: {
      en: "Sound amplification setup (for outdoor/large estates)",
      pl: "Zestaw nagłośnieniowy (na plenery i duże przestrzenie)",
      de: "Professionelle Tontechnik (für Open-Air & große Anwesen)"
    },
    wed_p3_f5: {
      en: "Unlimited custom song arrangements",
      pl: "Nielimitowane dedykowane aranżacje utworów",
      de: "Unbegrenzte individuelle Wunscharrangements"
    },

    // Repertoire Section
    wed_rep_uptitle: {
      en: "What We Play",
      pl: "Nasz Repertuar",
      de: "Unser Repertoire"
    },
    wed_rep_main_title: {
      en: "Popular Wedding Repertoire",
      pl: "Popularny Repertuar Ślubny",
      de: "Beliebtes Hochzeitsrepertoire"
    },
    wed_rep_lead: {
      en: "A curated selection of our most requested pieces for ceremony entrances, candlelit cocktail hours, and luxury galas.",
      pl: "Wyselekcjonowane, najczęściej wybierane utwory na wejście, nastrojowy koktajl przy świecach i luksusowe przyjęcia.",
      de: "Eine erlesene Auswahl unserer meistgefragten Stücke für den Einzug, stimmungsvolle Sektempfänge und exklusive Galas."
    },
    wed_rep_c1_title: {
      en: "Modern & Bridgerton",
      pl: "Nowoczesne i Styl Bridgertonów",
      de: "Modern & Bridgerton-Stil"
    },
    wed_rep_c1_desc: {
      en: "Romantic pop acoustic arrangements",
      pl: "Romantyczne akustyczne aranżacje pop",
      de: "Romantische akustische Pop-Arrangements"
    },
    wed_rep_c2_title: {
      en: "Classical & Sacred",
      pl: "Klasyka i Muzyka Sakralna",
      de: "Klassik & Sakrale Werke"
    },
    wed_rep_c2_desc: {
      en: "Timeless architectural beauty",
      pl: "Ponadczasowe piękno tradycji",
      de: "Zeitlose klassische Schönheit"
    },
    wed_rep_c3_title: {
      en: "Cinema & Soundtracks",
      pl: "Kino i Muzyka Filmowa",
      de: "Kino & Soundtracks"
    },
    wed_rep_c3_desc: {
      en: "Emotional orchestral narratives",
      pl: "Wzruszające opowieści orkiestrowe",
      de: "Emotionale orchestrale Klangwelten"
    },

    // Form Section
    wed_form_uptitle: {
      en: "Get in Touch",
      pl: "Skontaktuj się z Nami",
      de: "Kontakt Aufnehmen"
    },
    wed_form_main_title: {
      en: "Reserve Your Date",
      pl: "Zarezerwuj Swój Termin",
      de: "Reservieren Sie Ihren Termin"
    },
    wed_form_subtitle: {
      en: "Tell us about your wedding vision. We will confirm date availability and send a customized quote within 24 hours.",
      pl: "Opowiedz nam o swojej wizji ślubu. Potwierdzimy dostępność terminu i prześlemy spersonalizowaną ofertę w ciągu 24 godzin.",
      de: "Erzählen Sie uns von Ihrer Hochzeitsvision. Wir prüfen die Verfügbarkeit und senden Ihnen innerhalb von 24 Stunden ein individuelles Angebot."
    },
    wed_lbl_names: {
      en: "Couple's Names *",
      pl: "Imiona Pary Młodej *",
      de: "Namen des Brautpaares *"
    },
    wed_lbl_email: {
      en: "Email Address *",
      pl: "Adres E-mail *",
      de: "E-Mail-Adresse *"
    },
    wed_lbl_date: {
      en: "Wedding Date *",
      pl: "Data Ślubu *",
      de: "Hochzeitsdatum *"
    },
    wed_lbl_location: {
      en: "Venue & City *",
      pl: "Miejsce i Miasto *",
      de: "Location & Stadt *"
    },
    wed_lbl_package: {
      en: "Selected Collection",
      pl: "Wybrana Kolekcja",
      de: "Gewählte Kollektion"
    },
    wed_opt_p2: {
      en: "Ceremony & Cocktail (Signature - Most Requested)",
      pl: "Ceremonia i Koktajl (Flagowy - Najczęściej Wybierany)",
      de: "Zeremonie & Sektempfang (Signatur - Sehr Beliebt)"
    },
    wed_opt_p1: {
      en: "The Ceremony (Intimate)",
      pl: "Ceremonia (Kameralny)",
      de: "Die Zeremonie (Intim)"
    },
    wed_opt_p3: {
      en: "The Grand Gala (All-Inclusive)",
      pl: "Wielka Gala (Kompleksowy)",
      de: "Die Große Gala (All-Inclusive)"
    },
    wed_opt_custom: {
      en: "Custom / Need Guidance",
      pl: "Indywidualny / Potrzebuję Doradztwa",
      de: "Individuell / Beratung Gewünscht"
    },
    wed_lbl_message: {
      en: "Special Requests or Favorite Songs",
      pl: "Życzenia Specjalne lub Ulubione Utwory",
      de: "Besondere Wünsche oder Lieblingslieder"
    },
    wed_btn_submit: {
      en: "Send Wedding Inquiry",
      pl: "Wyślij Zapytanie Ślubne",
      de: "Hochzeitsanfrage Absenden"
    },
    wed_direct_note_prefix: {
      en: "Prefer direct communication? Call us at",
      pl: "Wolisz kontakt bezpośredni? Zadzwoń pod numer",
      de: "Bevorzugen Sie direkten Kontakt? Rufen Sie uns an unter"
    },
    wed_direct_note_or: {
      en: "or write to",
      pl: "lub napisz na adres",
      de: "oder schreiben Sie an"
    },
    wed_ph_names: {
      en: "e.g. Eleanor & Lucas",
      pl: "np. Anna i Piotr",
      de: "z.B. Julia & Maximilian"
    },
    wed_ph_email: {
      en: "contact@example.com",
      pl: "kontakt@przyklad.pl",
      de: "kontakt@beispiel.de"
    },
    wed_ph_location: {
      en: "e.g. Schloss Bensberg, Bergisch Gladbach",
      pl: "np. Pałac w Radziejowicach, Warszawa",
      de: "z.B. Schloss Bensberg, Bergisch Gladbach"
    },
    wed_ph_message: {
      en: "Tell us if you have special entrance songs, indoor/outdoor plans, or specific timing...",
      pl: "Napisz nam o wybranych utworach na wejście, planach plenerowych lub harmonogramie...",
      de: "Teilen Sie uns besondere Einzugslieder, Pläne für drinnen/draußen oder Zeitabläufe mit..."
    },

    // =============================================================
    // // CONTACT.HTML
    // =============================================================

    // Hero Section
    contact_hero_badge: {
      en: "Inquiries & Management",
      pl: "Zapytania i Impresariat",
      de: "Anfragen & Management"
    },
    contact_hero_title: {
      en: "Get in Touch",
      pl: "Kontakt",
      de: "Kontakt Aufnehmen"
    },
    contact_hero_desc: {
      en: "We collaborate with festival directors, cultural institutions, private hosts, and wedding planners across Europe.",
      pl: "Współpracujemy z dyrektorami festiwali, instytucjami kultury, gospodarzami wydarzeń prywatnych i konsultantami ślubnymi w całej Europie.",
      de: "Wir kooperieren mit Festivalleitungen, Kulturinstitutionen, privaten Gastgebern und Wedding Plannern in ganz Europa."
    },

    // Left Column: Direct Info
    contact_direct_badge: {
      en: "Direct Communication",
      pl: "Bezpośrednia Komunikacja",
      de: "Direkte Kommunikation"
    },
    contact_mgmt_title: {
      en: "Artistic Management",
      pl: "Impresariat Artystyczny",
      de: "Künstlerisches Management"
    },
    contact_mgmt_desc: {
      en: "For season bookings, festival programming, film/studio sessions, or press inquiries, contact our management team directly:",
      pl: "W sprawie rezerwacji sezonu, programów festiwalowych, sesji nagraniowych/filmowych lub zapytań prasowych, prosimy o bezpośredni kontakt z impresariatem:",
      de: "Für Saisonbuchungen, Festivalprogramme, Studio-/Filmaufnahmen oder Presseanfragen kontaktieren Sie bitte direkt unser Management:"
    },
    contact_lbl_mgmt: {
      en: "General Management & Bookings:",
      pl: "Zarząd i Rezerwacje Ogólne:",
      de: "Generalmanagement & Buchungen:"
    },
    contact_lbl_phone_pl: {
      en: "Phone (Office & Poland):",
      pl: "Telefon (Biuro / Polska):",
      de: "Telefon (Büro / Polen):"
    },
    contact_lbl_phone_de: {
      en: "Phone (Germany):",
      pl: "Telefon (Niemcy):",
      de: "Telefon (Deutschland):"
    },
    contact_lbl_weddings: {
      en: "Weddings & Private Celebrations:",
      pl: "Śluby i Uroczystości Prywatne:",
      de: "Hochzeiten & Private Feiern:"
    },
    contact_lbl_based: {
      en: "Based in:",
      pl: "Siedziba:",
      de: "Standort:"
    },
    contact_val_based: {
      en: "Poland & Germany (Available for European tours)",
      pl: "Polska i Niemcy (Dostępni na trasy po Europie)",
      de: "Polen & Deutschland (Verfügbar für Europatourneen)"
    },
    contact_lbl_response: {
      en: "Response Time:",
      pl: "Czas Odpowiedzi:",
      de: "Antwortzeit:"
    },
    contact_val_response: {
      en: "Within 24 business hours",
      pl: "Do 24 godzin roboczych",
      de: "Innerhalb von 24 Geschäftsstunden"
    },

    // EPK Box
    contact_epk_badge: {
      en: "Press & Promoters",
      pl: "Prasa i Promotorzy",
      de: "Presse & Veranstalter"
    },
    contact_epk_title: {
      en: "Electronic Press Kit (EPK)",
      pl: "Elektroniczny Press Kit (EPK)",
      de: "Elektronische Pressemappe (EPK)"
    },
    contact_epk_desc: {
      en: "Need high-resolution promotional photos, bios in multiple languages, stage riders, or sample repertoire lists?",
      pl: "Potrzebujesz zdjęć promocyjnych w wysokiej rozdzielczości, not biograficznych w różnych językach, ridera technicznego lub listy repertuaru?",
      de: "Benötigen Sie hochauflösende Pressefotos, mehrsprachige Biografien, Technical Rider oder Repertoirelisten?"
    },
    contact_epk_btn: {
      en: "Download Media Kit (Drive) ↗",
      pl: "Pobierz Materiały Prasowe (Drive) ↗",
      de: "Pressematerial Herunterladen (Drive) ↗"
    },

    // Right Column: Form
    contact_form_uptitle: {
      en: "Send a Message",
      pl: "Wyślij Wiadomość",
      de: "Nachricht Senden"
    },
    contact_form_main_title: {
      en: "General Inquiries",
      pl: "Zapytania Ogólne",
      de: "Allgemeine Anfragen"
    },
    contact_lbl_name: {
      en: "Full Name / Organization *",
      pl: "Imię i Nazwisko / Instytucja *",
      de: "Name / Institution *"
    },
    contact_ph_name: {
      en: "e.g. Maria Kowalska",
      pl: "np. Maria Kowalska",
      de: "z.B. Dr. Michael Weber"
    },
    contact_lbl_email: {
      en: "Email Address *",
      pl: "Adres E-mail *",
      de: "E-Mail-Adresse *"
    },
    contact_ph_email: {
      en: "contact@example.com",
      pl: "kontakt@przyklad.pl",
      de: "kontakt@beispiel.de"
    },
    contact_lbl_type: {
      en: "Inquiry Type *",
      pl: "Typ Zapytania *",
      de: "Art der Anfrage *"
    },
    contact_opt_booking: {
      en: "Concert / Festival Booking",
      pl: "Koncert / Rezerwacja Festiwalowa",
      de: "Konzert- / Festivalbuchung"
    },
    contact_opt_gala: {
      en: "Private Gala / Corporate Event",
      pl: "Gala Prywatna / Wydarzenie Firmowe",
      de: "Private Gala / Firmenevent"
    },
    contact_opt_studio: {
      en: "Studio / Film Recording",
      pl: "Nagranie Studyjne / Muzyka Filmowa",
      de: "Studio- / Filmaufnahme"
    },
    contact_opt_press: {
      en: "Press / Media Request",
      pl: "Zapytanie Prasowe / Media",
      de: "Presse- / Medienanfrage"
    },
    contact_opt_other: {
      en: "Other Question",
      pl: "Inne Pytanie",
      de: "Sonstige Anfrage"
    },
    contact_lbl_date: {
      en: "Estimated Date (If applicable)",
      pl: "Planowana Data (opcjonalnie)",
      de: "Geplantes Datum (falls zutreffend)"
    },
    contact_lbl_message: {
      en: "Your Message *",
      pl: "Twoja Wiadomość *",
      de: "Ihre Nachricht *"
    },
    contact_ph_message: {
      en: "Tell us about your event, venue details, or project timeline...",
      pl: "Opisz nam swoje wydarzenie, szczegóły miejsca lub harmonogram projektu...",
      de: "Beschreiben Sie Ihre Veranstaltung, Spielortdetails oder den Zeitplan..."
    },
    contact_btn_submit: {
      en: "Send Message",
      pl: "Wyślij Wiadomość",
      de: "Nachricht Absenden"
    },

    // =============================================================
    // // NOSFERATU.HTML
    // =============================================================

    // Hero Section & Quick Bar
    nosf_back_link: {
      en: "← Back to Concert Programs",
      pl: "← Powrót do programów koncertowych",
      de: "← Zurück zu den Konzertprogrammen"
    },
    nosf_hero_badge: {
      en: "Signature Cine-Concert Production",
      pl: "Flagowa Produkcja Kina Niemego z Muzyką na Żywo",
      de: "Hauptproduktion Stummfilm-Kinekonzert"
    },
    nosf_hero_title: {
      en: "Nosferatu: A Symphony of Horror (1922)",
      pl: "Nosferatu: Symfonia Grozy (1922)",
      de: "Nosferatu: Eine Symphonie des Grauens (1922)"
    },
    nosf_hero_desc: {
      en: "Full screening of F.W. Murnau’s silent masterpiece with live chamber ensemble performing the music of Johannes Brahms (~65 mins).",
      pl: "Pełny pokaz arcydzieła kina niemego F.W. Murnaua z muzyką Johannesa Brahmsa na żywo w wykonaniu zespołu kameralnego (~65 min).",
      de: "Vollständige Vorführung von F.W. Murnaus Stummfilm-Meisterwerk mit Live-Kammerensemble zur Musik von Johannes Brahms (~65 Min.)."
    },
    nosf_btn_play_teaser: {
      en: "Watch Fullscreen Performance",
      pl: "Obejrzyj Zwiastun w Pełnym Ekranie",
      de: "Performance im Vollbild Ansehen"
    },
    nosf_meta_live_score: {
      en: "Johannes Brahms Live Score",
      pl: "Muzyka Johannesa Brahmsa na Żywo",
      de: "Johannes Brahms Live-Filmmusik"
    },
    nosf_meta_runtime: {
      en: "65 Mins",
      pl: "65 Minut",
      de: "65 Minuten"
    },
    nosf_btn_buy_tickets: {
      en: "View Tour Dates & Buy Tickets",
      pl: "Zobacz Daty Trasy i Kup Bilety",
      de: "Tourdaten Ansehen & Tickets Kaufen"
    },
    nosf_btn_download_pdf: {
      en: "📄 Download Production Brochure (PDF)",
      pl: "📄 Pobierz Broszurę Produkcji (PDF)",
      de: "📄 Produktionsbroschüre Herunterladen (PDF)"
    },

    // Essay: Part 1 (History & Film Analysis)
    nosf_essay_badge1: {
      en: "Historical Perspective",
      pl: "Perspektywa Historyczna",
      de: "Historische Perspektive"
    },
    nosf_essay_title1: {
      en: "The Masterpiece of Silent Cinema",
      pl: "Arcydzieło Kina Niemego",
      de: "Das Meisterwerk des Stummfilms"
    },
    nosf_p1: {
      en: "Nosferatu by Friedrich Wilhelm Murnau is regarded as the first major horror film in the history of cinema. More than a century after its premiere in 1922, this Expressionist masterpiece of silent film remains a unique work and continues to set standards within the genre.",
      pl: "Nosferatu Friedricha Wilhelma Murnaua jest pierwszym znaczącym horrorem w historii kina. Mimo upływu ponad stu lat od premiery to nieme, ekspresjonistyczne arcydzieło pozostaje dziełem wyjątkowym i do dziś wyznacza standardy gatunku.",
      de: "Nosferatu von Friedrich Wilhelm Murnau gilt als der erste bedeutende Horrorfilm der Kinogeschichte. Auch mehr als hundert Jahre nach seiner Premiere bleibt dieses expressionistische Meisterwerk des Stummfilms ein einzigartiges Werk und setzt bis heute Maßstäbe innerhalb des Genres."
    },
    nosf_p2: {
      en: "Although the film is an unauthorized adaptation of Bram Stoker’s immortal novel Dracula, the vampire is portrayed here in a completely different way from the literary original. In Stoker’s novel, Dracula is both terrifying and seductive – demonic, yet possessing the allure of a romantic hero. Murnau, by contrast, strips his vampire of every romantic quality. Nosferatu is a repulsive “living dead” creature, a merciless predator driven solely by his hunger for blood.",
      pl: "Choć film stanowi nieautoryzowaną adaptację nieśmiertelnej powieści Brama Stokera Drakula, postać wampira została w nim ukazana zupełnie inaczej niż w literackim pierwowzorze. U Stokera Drakula jest zarazem przerażający i uwodzicielski – demoniczny, ale obdarzony magnetycznym urokiem romantycznego bohatera. Tymczasem Murnau pozbawia swojego upiora wszelkiego romantyzmu. Nosferatu jest odpychającym „żywym trupem”, bezwzględnym drapieżnikiem kierującym się wyłącznie głodem krwi.",
      de: "Obwohl der Film eine nicht autorisierte Adaption des unsterblichen Romans Dracula von Bram Stoker darstellt, wird die Figur des Vampirs hier völlig anders gestaltet als in der literarischen Vorlage. Bei Stoker ist Dracula zugleich furchterregend und verführerisch – dämonisch, aber auch mit der Anziehungskraft eines romantischen Helden ausgestattet. Murnau hingegen entzieht seinem Vampir jeglichen romantischen Zug. Nosferatu ist ein abstoßender „lebender Toter“, ein gnadenloses Raubwesen, das ausschließlich von seinem Hunger nach Blut getrieben wird."
    },
    nosf_p3: {
      en: "Yet he is far more than just another figure of horror cinema. Nosferatu appears almost as a dark force of nature – he brings the plague to the city, is accompanied by rats and bats, and his very presence becomes a symbol of death. At the same time, behind his almost animalistic thirst for blood lies a clear erotic metaphor, recalling the connection between sexuality and the death drive known from psychoanalysis.",
      pl: "To jednak coś więcej niż kolejny potwór kina grozy. Nosferatu przypomina mroczną siłę natury – sprowadza na miasto zarazę, towarzyszą mu szczury i nietoperze, a jego obecność staje się uosobieniem śmierci. Pod niemal zwierzęcą żądzą krwi kryje się również czytelna metafora erotyczna, odwołująca się do znanego z psychoanalizy związku między seksualnością a popędem śmierci.",
      de: "Doch er ist weit mehr als nur ein weiterer Schrecken des Horrorkinos. Nosferatu erscheint wie eine dunkle Naturgewalt – er bringt die Pest über die Stadt, wird von Ratten und Fledermäusen begleitet, und seine Erscheinung wird zum Sinnbild des Todes. Hinter seiner beinahe animalischen Gier nach Blut verbirgt sich zugleich eine deutliche erotische Metapher, die an die in der Psychoanalyse bekannte Verbindung zwischen Sexualität und Todestrieb erinnert."
    },
    nosf_p4: {
      en: "Murnau’s vision of the vampire would not have been nearly as powerful without the extraordinary performance of Max Schreck. The character he created appears inhuman, alien, and deeply disturbing. The director made masterful use of the limited technical possibilities of early 1920s cinema, developing bold visual solutions that have remained part of the cinematic vocabulary to this day. Nosferatu captivates with its unmistakable, raw visual style, which has lost none of its impact even after more than a century.",
      pl: "Murnauowska wizja wampira nie byłaby tak sugestywna bez niezwykłej kreacji Maxa Schrecka. Stworzona przez niego postać jest nieludzka, obca i głęboko niepokojąca. Reżyser po mistrzowsku wykorzystał skromne możliwości techniczne początku lat dwudziestych, wprowadzając przy tym szereg śmiałych rozwiązań formalnych i współtworząc język filmowy, z którego kino korzysta do dziś. Nosferatu zachwyca niepowtarzalnym, surowym stylem wizualnym, który mimo upływu czasu nie traci swojej siły oddziaływania.",
      de: "Murnaus Vorstellung des Vampirs wäre ohne die außergewöhnliche Darstellung durch Max Schreck nicht annähernd so eindrucksvoll. Die von ihm erschaffene Figur wirkt unmenschlich, fremdartig und zutiefst beunruhigend. Der Regisseur nutzte die begrenzten technischen Möglichkeiten des Kinos der frühen 1920er-Jahre meisterhaft und entwickelte dabei mutige formale Lösungen, die bis heute zum visuellen Vokabular des Films gehören. Nosferatu beeindruckt durch seinen unverwechselbaren, rauen visuellen Stil, der auch nach über einem Jahrhundert nichts von seiner Wirkung verloren hat."
    },

    // Essay: Part 2 (Music & Concept)
    nosf_essay_badge2: {
      en: "The Musical Conception",
      pl: "Koncepcja Muzyczna",
      de: "Das Musikalische Konzept"
    },
    nosf_essay_title2: {
      en: "The Lost Score & Johannes Brahms",
      pl: "Zaginiona Partytura i Johannes Brahms",
      de: "Die Verschollene Partitur & Johannes Brahms"
    },
    nosf_p5: {
      en: "Despite its name, silent cinema was never truly silent. Although audiences could not hear the actors’ voices, films were almost always accompanied by live music. We would like to bring this unique experience of the original film presentation back to life and invite audiences to experience Nosferatu in a form that comes as close as possible to the way silent films were originally presented.",
      pl: "Wbrew swojej nazwie kino nieme nigdy nie było naprawdę nieme. Choć widzowie nie słyszeli głosów aktorów, projekcjom niemal zawsze towarzyszyła muzyka wykonywana na żywo. Pragniemy przywrócić współczesnej publiczności to wyjątkowe doświadczenie i zaprosić do obejrzenia filmu w sposób możliwie najbliższy jego pierwotnej prezentacji.",
      de: "Trotz seines Namens war das Stummfilmkino niemals wirklich stumm. Auch wenn das Publikum die Stimmen der Schauspieler nicht hören konnte, wurden die Filme nahezu immer von live gespielter Musik begleitet. Wir möchten dieses besondere Erlebnis der ursprünglichen Filmaufführung wieder lebendig werden lassen und laden dazu ein, Nosferatu in einer Form zu erleben, die seiner historischen Präsentation möglichst nahekommt."
    },
    nosf_p6: {
      en: "The original score by Hans Erdmann was lost on the very day of the film’s premiere – according to contemporary accounts, the score disappeared from the conductor’s stand that same evening. To this day, therefore, it is not known with complete certainty what the original musical accompaniment to Nosferatu sounded like, despite numerous attempts by contemporary composers and musicologists to reconstruct it.",
      pl: "Oryginalna partytura skomponowana przez Hansa Erdmanna zaginęła już w dniu premiery filmu – według przekazów partytura zniknęła z pulpitu dyrygenta jeszcze tego samego wieczoru. Do dziś nie wiadomo więc z całkowitą pewnością, jak brzmiała muzyka towarzysząca pierwszym pokazom Nosferatu, mimo licznych prób jej rekonstrukcji podejmowanych przez współczesnych kompozytorów i badaczy.",
      de: "Die originale Filmmusik von Hans Erdmann ging bereits am Tag der Uraufführung verloren – Überlieferungen zufolge verschwand die Partitur noch am selben Abend vom Dirigentenpult. Bis heute ist daher nicht mit völliger Sicherheit bekannt, wie die ursprüngliche Begleitmusik zu Nosferatu geklungen hat, obwohl zahlreiche zeitgenössische Komponisten und Musikwissenschaftler versucht haben, sie zu rekonstruieren."
    },
    nosf_p7: {
      en: "The story of the film is set in the mid-19th century. For our performance, we have chosen music by Johannes Brahms, a composer who, like Bram Stoker, the author of Dracula, belonged to this era. His music reflects the Romantic character and dramatic atmosphere of the Victorian age in a particularly compelling way, creating a symbolic connection between the period of the literary original and our contemporary interpretation of this dark story.",
      pl: "Akcja filmu rozgrywa się w połowie XIX wieku. Na potrzeby naszego spektaklu wybraliśmy muzykę Johannesa Brahmsa – kompozytora żyjącego w tej samej epoce co Bram Stoker, autora Drakuli. Jego twórczość doskonale oddaje romantyczny charakter i dramatyzm epoki wiktoriańskiej, tworząc symboliczny pomost między czasem literackiego pierwowzoru a naszą współczesną interpretacją tej mrocznej historii.",
      de: "Die Handlung des Films spielt in der Mitte des 19. Jahrhunderts. Für unsere Aufführung haben wir Musik von Johannes Brahms ausgewählt – einem Komponisten, der wie Bram Stoker, der Autor von Dracula, dieser Epoche angehörte. Seine Musik spiegelt den romantischen Charakter und die dramatische Atmosphäre des viktorianischen Zeitalters auf besondere Weise wider und schafft eine symbolische Verbindung zwischen der Zeit der literarischen Vorlage und unserer heutigen Interpretation dieser düsteren Geschichte."
    },
    nosf_p8: {
      en: "The film will be accompanied by a string sextet and piano, giving the evening an intimate chamber-music character while maintaining a powerful and intense atmosphere. Conductor Katarzyna Marek guides the musical narrative, ensuring its sonic coherence and dramatic development.",
      pl: "Muzykę do filmu wykona sekstet smyczkowy z towarzyszeniem fortepianu, nadając całości kameralny, a zarazem intensywny charakter. Nad spójnością brzmienia i dramaturgią muzycznej narracji czuwać będzie dyrygentka Katarzyna Marek.",
      de: "Die Filmmusik wird von einem Streichsextett mit Klavierbegleitung aufgeführt und verleiht dem Abend einen kammermusikalischen, zugleich aber intensiven Charakter. Für die klangliche Geschlossenheit und die dramaturgische Entwicklung der musikalischen Erzählung sorgt die Dirigentin Katarzyna Marek."
    },

    // Cast Roster
    nosf_cast_badge: {
      en: "Artistic Direction",
      pl: "Kierownictwo Artystyczne",
      de: "Künstlerische Leitung"
    },
    nosf_cast_title: {
      en: "Performers & Cast",
      pl: "Wykonawcy i Obsada",
      de: "Mitwirkende & Besetzung"
    },
    nosf_role_conductor: {
      en: "Musical Director & Conductor",
      pl: "Kierownictwo Muzyczne i Dyrygent",
      de: "Musikalische Leitung & Dirigentin"
    },
    nosf_ensemble_tag: {
      en: "Ensemble (Golden Star Augmented Sextet & Piano)",
      pl: "Zespół (Golden Star Rozszerzony Sekstet i Fortepian)",
      de: "Ensemble (Golden Star Erweitertes Sextett & Klavier)"
    },
    nosf_inst_vln1: {
      en: "1st Violin",
      pl: "I Skrzypce",
      de: "1. Violine"
    },
    nosf_inst_vln2: {
      en: "2nd Violin",
      pl: "II Skrzypce",
      de: "2. Violine"
    },
    nosf_inst_vla1: {
      en: "1st Viola",
      pl: "I Altówka",
      de: "1. Bratsche"
    },
    nosf_inst_vla2: {
      en: "2nd Viola",
      pl: "II Altówka",
      de: "2. Bratsche"
    },
    nosf_inst_vc: {
      en: "Violoncello",
      pl: "Wiolonczela",
      de: "Violoncello"
    },
    nosf_inst_db: {
      en: "Double Bass",
      pl: "Kontrabas",
      de: "Kontrabass"
    },
    nosf_inst_piano: {
      en: "Piano",
      pl: "Fortepian",
      de: "Klavier"
    },

    // Specs Card
    nosf_specs_title: {
      en: "Technical & Stage Specs",
      pl: "Wymagania Techniczne i Sceniczne",
      de: "Technische & Bühnenanforderungen"
    },
    nosf_spec_lbl_inst: {
      en: "Instrumentation:",
      pl: "Skład instrumentalny:",
      de: "Besetzung:"
    },
    nosf_spec_val_inst: {
      en: "String Sextet (2 Vln, 2 Vla, Vc, Db), Piano, Conductor.",
      pl: "Sekstet smyczkowy (2 Vln, 2 Vla, Vc, Db), Fortepian, Dyrygent.",
      de: "Streichsextett (2 Vln, 2 Vla, Vc, Kb), Klavier, Dirigentin."
    },
    nosf_spec_lbl_dur: {
      en: "Duration:",
      pl: "Czas trwania:",
      de: "Dauer:"
    },
    nosf_spec_val_dur: {
      en: "~65 minutes without intermission.",
      pl: "~65 minut bez przerwy.",
      de: "~65 Minuten ohne Pause."
    },
    nosf_spec_lbl_film: {
      en: "Film Copy:",
      pl: "Kopia filmu:",
      de: "Filmfassung:"
    },
    nosf_spec_val_film: {
      en: "HD restored 1922 digital master with custom cue timestamps.",
      pl: "Zrekonstruowana cyfrowa kopia HD z 1922 roku ze znacznikami synchronizacji.",
      de: "HD-restaurierte digitale Masterfassung von 1922 mit Synchronisationsmarkern."
    },
    nosf_spec_lbl_stage: {
      en: "Stage Needs:",
      pl: "Wymagania sceniczne:",
      de: "Bühnenbedarf:"
    },
    nosf_spec_val_stage: {
      en: "Cinema screen/projector, 8 musician chairs, 8 lit music stands, stage monitor.",
      pl: "Ekran kinowy/projektor, 8 krzeseł dla muzyków, 8 podświetlanych pulpitów, odsłuch.",
      de: "Leinwand/Beamer, 8 Musikerstühle, 8 beleuchtete Notenpulte, Bühnenmonitor."
    },
    nosf_specs_btn_host: {
      en: "Host This Production at Your Venue",
      pl: "Zorganizuj tę produkcję w swojej sali",
      de: "Diese Produktion für Ihren Spielort buchen"
    },

    // Gallery & CTA
    nosf_gal_badge: {
      en: "Production Gallery",
      pl: "Galeria Produkcji",
      de: "Produktionsgalerie"
    },
    nosf_gal_title: {
      en: "Live Concert Impressions",
      pl: "Zdjęcia z Koncertów na Żywo",
      de: "Impressionen der Live-Konzerte"
    },
    nosf_gal_lead: {
      en: "Click any photograph to view high-resolution gallery impressions. Use arrow keys to navigate.",
      pl: "Kliknij dowolne zdjęcie, aby powiększyć. Używaj strzałek na klawiaturze do nawigacji.",
      de: "Klicken Sie auf ein Foto, um die Galerieansicht zu öffnen. Navigation über die Pfeiltasten möglich."
    },
    nosf_cta_badge: {
      en: "Upcoming Screenings",
      pl: "Nadchodzące Pokazy",
      de: "Aktuelle Vorführungen"
    },
    nosf_cta_title: {
      en: "Experience Nosferatu Live on Tour",
      pl: "Przeżyj Nosferatu na Żywo w Trasie",
      de: "Erleben Sie Nosferatu Live auf Tournee"
    },
    nosf_cta_desc: {
      en: "Secure your tickets for upcoming performances across Germany, Poland, and Austria (~65 mins).",
      pl: "Zarezerwuj bilety na nadchodzące koncerty w Niemczech, Polsce i Austrii (~65 min).",
      de: "Sichern Sie sich Tickets für anstehende Vorführungen in Deutschland, Polen und Österreich (~65 Min.)."
    },

    // =============================================================
    // // MICHAEL-JACKSON.HTML
    // =============================================================

    mj_back_link: {
      en: "← Back to Concert Programs",
      pl: "← Powrót do programów koncertowych",
      de: "← Zurück zu den Konzertprogrammen"
    },
    mj_hero_badge: {
      en: "Pop Crossover Series",
      pl: "Seria Pop Crossover",
      de: "Pop-Crossover-Reihe"
    },
    mj_hero_title: {
      en: "Best of Michael Jackson",
      pl: "Best of Michael Jackson",
      de: "Best of Michael Jackson"
    },
    mj_hero_desc: {
      en: "The greatest hits of the King of Pop reimagined with classical virtuosity and driving acoustic rhythm.",
      pl: "Największe przeboje Króla Popu w nowej odsłonie, łączące wirtuozerię klasyczną z pulsującym rytmem akustycznym.",
      de: "Die größten Hits des King of Pop, neu interpretiert mit klassischer Virtuosität und treibendem akustischen Rhythmus."
    },
    mj_card_badge: {
      en: "Pop Legend & Strings",
      pl: "Legenda Popu i Smyczki",
      de: "Poplegende & Streicher"
    },
    mj_card_title: {
      en: "The King of Pop Reimagined",
      pl: "Król Popu w Nowej Odsłonie",
      de: "Der King of Pop Neu Erlebt"
    },
    mj_card_desc: {
      en: "A musical journey through Michael Jackson’s legendary discography. Iconic anthems like Billie Jean, Beat It, Smooth Criminal, Thriller, Black or White, and Man in the Mirror are given fresh life through original arrangements for string quartet.",
      pl: "Muzyczna podróż przez legendarne dziedzictwo Michaela Jacksona. Kultowe hymny, takie jak Billie Jean, Beat It, Smooth Criminal, Thriller, Black or White i Man in the Mirror, zyskują nowe życie w autorskich aranżacjach na kwartet smyczkowy.",
      de: "Eine musikalische Reise durch Michael Jacksons legendäre Diskografie. Ikonische Hymnen wie Billie Jean, Beat It, Smooth Criminal, Thriller, Black or White und Man in the Mirror erhalten durch originalgetreue Streichquartett-Arrangements neues Leben."
    },
    mj_virtuosity_title: {
      en: "Virtuosity & Rhythm",
      pl: "Wirtuozeria i Rytm",
      de: "Virtuosität & Rhythmus"
    },
    mj_virtuosity_desc: {
      en: "Combining classical poise with infectious groove, the ensemble turns violins and cellos into percussive, electrifying instruments.",
      pl: "Łącząc klasyczną elegancję z zaraźliwym groovem, zespół zmienia skrzypce i wiolonczele w perkusyjne, elektryzujące instrumenty.",
      de: "Durch die Verbindung klassischer Eleganz mit mitreißendem Groove verwandelt das Ensemble Violinen und Violoncelli in perkussive, elektrisierende Instrumente."
    },
    mj_meta_hits: {
      en: "Michael Jackson Hits",
      pl: "Przeboje Michaela Jacksona",
      de: "Michael Jackson Hits"
    },
    mj_meta_quartet: {
      en: "String Quartet",
      pl: "Kwartet Smyczkowy",
      de: "Streichquartett"
    },
    mj_meta_runtime: {
      en: "~75 Mins",
      pl: "~75 Minut",
      de: "~75 Min."
    },
    mj_btn_dates_tickets: {
      en: "View Dates & Buy Tickets",
      pl: "Zobacz Daty i Kup Bilety",
      de: "Termine & Tickets Kaufen"
    },

    // Essay Section
    mj_essay_badge1: {
      en: "Acoustic Crossover",
      pl: "Crossover Akustyczny",
      de: "Akustischer Crossover"
    },
    mj_essay_title1: {
      en: "Timeless Pop Meets Chamber Brilliance",
      pl: "Ponadczasowy Pop Spotyka Kameralny Blask",
      de: "Zeitloser Pop Trifft auf Kammermusikalische Brillanz"
    },
    mj_p1: {
      en: "Best of Michael Jackson is a unique evening with the Golden Star String Quartet, taking the audience on a musical journey through the greatest hits of the King of Pop. Michael Jackson’s iconic songs are given new life through original arrangements for string instruments, combining the elegance of classical music with the energy and timeless appeal of his greatest hits.",
      pl: "Best of Michael Jackson to niezwykła propozycja na spędzenie wieczoru z kwartetem smyczkowym Golden Star, który zabierze publiczność w muzyczną podróż przez największe przeboje Króla Popu. Kultowe utwory Michaela Jacksona zyskują nowe życie dzięki autorskim aranżacjom na instrumenty smyczkowe, łącząc elegancję muzyki klasycznej z energią i ponadczasowymi hitami.",
      de: "Best of Michael Jackson ist ein einzigartiger Abend mit dem Golden Star Streichquartett, das das Publikum auf eine musikalische Reise durch die größten Hits des King of Pop mitnimmt. Michael Jacksons ikonische Songs erhalten durch originelle Arrangements für Streichinstrumente neues Leben und verbinden die Eleganz der klassischen Musik mit der Energie und dem zeitlosen Reiz seiner größten Hits."
    },
    mj_p2: {
      en: "During the concert, you will hear such legendary songs as Billie Jean, Beat It, Smooth Criminal, Thriller, Black or White, Man in the Mirror, and many other compositions that have become an enduring part of the history of popular music.",
      pl: "Podczas koncertu usłyszą Państwo takie utwory jak Billie Jean, Beat It, Smooth Criminal, Thriller, Black or White, Man in the Mirror oraz wiele innych kompozycji, które na stałe zapisały się w historii światowej muzyki.",
      de: "Während des Konzerts hören Sie legendäre Songs wie Billie Jean, Beat It, Smooth Criminal, Thriller, Black or White, Man in the Mirror und viele weitere Kompositionen, die zu einem festen Bestandteil der Musikgeschichte geworden sind."
    },
    mj_p3: {
      en: "The sound of violins, viola, and cello allows these familiar melodies to be discovered anew — with subtlety, emotion, and extraordinary expressive power.",
      pl: "Brzmienie skrzypiec, altówki i wiolonczeli pozwala odkryć znane melodie na nowo – subtelnie, emocjonalnie i z niezwykłą siłą wyrazu.",
      de: "Der Klang von Violinen, Bratsche und Violoncello lässt diese vertrauten Melodien neu entdecken – voller Subtilität, Emotion und außergewöhnlicher Ausdruckskraft."
    },
    mj_essay_badge2: {
      en: "The Experience",
      pl: "Doświadczenie",
      de: "Das Erlebnis"
    },
    mj_essay_title2: {
      en: "An Evening for All Generations",
      pl: "Wieczór dla Wszystkich Pokoleń",
      de: "Ein Abend für Alle Generationen"
    },
    mj_p4: {
      en: "This concert is perfect both for devoted Michael Jackson fans and for lovers of live music who appreciate original interpretations of the world’s greatest hits. “Best of Michael Jackson” is an evening filled with emotion, virtuosity, and unforgettable musical experiences, proving that great songs are timeless — and that they sound just as powerful and captivating in a classical setting.",
      pl: "To propozycja zarówno dla wiernych fanów Michaela Jacksona, jak i miłośników muzyki na żywo, którzy cenią oryginalne interpretacje największych światowych przebojów. „Best of Michael Jackson” to koncert pełen emocji, wirtuozerii i niezapomnianych muzycznych wrażeń, który udowadnia, że wielkie przeboje są ponadczasowe i doskonale brzmią również w klasycznej odsłonie.",
      de: "Dieses Konzert ist perfekt sowohl für treue Michael-Jackson-Fans als auch für Liebhaber der Live-Musik, die originelle Interpretationen der weltgrößten Hits schätzen. „Best of Michael Jackson“ ist ein Abend voller Emotionen, Virtuosität und unvergesslicher musikalischer Erlebnisse, der beweist, dass große Songs zeitlos sind – und im klassischen Gewand ebenso kraftvoll und fesselnd klingen."
    },

    // Sidebar Cast & Specs
    mj_cast_badge: {
      en: "Ensemble",
      pl: "Zespół",
      de: "Ensemble"
    },
    mj_cast_title: {
      en: "Golden Star Quartet",
      pl: "Kwartet Golden Star",
      de: "Golden Star Quartett"
    },
    mj_inst_vln1: {
      en: "Violin I",
      pl: "Skrzypce I",
      de: "Violine I"
    },
    mj_inst_vln2: {
      en: "Violin II",
      pl: "Skrzypce II",
      de: "Violine II"
    },
    mj_inst_vla: {
      en: "Viola",
      pl: "Altówka",
      de: "Bratsche"
    },
    mj_inst_vc: {
      en: "Violoncello",
      pl: "Wiolonczela",
      de: "Violoncello"
    },
    mj_specs_title: {
      en: "Program Details",
      pl: "Szczegóły Programu",
      de: "Programmdetails"
    },
    mj_spec_lbl_rep: {
      en: "Repertoire:",
      pl: "Repertuar:",
      de: "Repertoire:"
    },
    mj_spec_val_rep: {
      en: "Billie Jean, Beat It, Smooth Criminal, Thriller, Black or White, Man in the Mirror, and more.",
      pl: "Billie Jean, Beat It, Smooth Criminal, Thriller, Black or White, Man in the Mirror i inne.",
      de: "Billie Jean, Beat It, Smooth Criminal, Thriller, Black or White, Man in the Mirror u.v.m."
    },
    mj_spec_lbl_dur: {
      en: "Duration:",
      pl: "Czas trwania:",
      de: "Dauer:"
    },
    mj_spec_val_dur: {
      en: "~75 minutes without intermission.",
      pl: "~75 minut bez przerwy.",
      de: "~75 Minuten ohne Pause."
    },
    mj_spec_lbl_inst: {
      en: "Instrumentation:",
      pl: "Skład:",
      de: "Besetzung:"
    },
    mj_spec_val_inst: {
      en: "String Quartet (2 Violins, Viola, Cello).",
      pl: "Kwartet smyczkowy (2 skrzypce, altówka, wiolonczela).",
      de: "Streichquartett (2 Violinen, Bratsche, Violoncello)."
    },
    mj_specs_btn_host: {
      en: "Host This Concert at Your Venue",
      pl: "Zorganizuj ten koncert w swojej sali",
      de: "Dieses Konzert für Ihren Spielort buchen"
    },

    // Bottom Banner
    mj_cta_badge: {
      en: "Upcoming Performance",
      pl: "Nadchodzący Występ",
      de: "Kommender Auftritt"
    },
    mj_cta_title: {
      en: "Experience Best of Michael Jackson Live",
      pl: "Przeżyj Best of Michael Jackson na Żywo",
      de: "Erleben Sie Best of Michael Jackson Live"
    },
    mj_cta_desc: {
      en: "Join us on November 10, 2026 at Jazzment Klub in Szczecin, Poland.",
      pl: "Dołącz do nas 10 listopada 2026 r. w Jazzment Klubie w Szczecinie.",
      de: "Seien Sie am 10. November 2026 im Jazzment Klub in Stettin (Polen) dabei."
    },
    mj_btn_get_tickets: {
      en: "Get Concert Tickets",
      pl: "Kup Bilety na Koncert",
      de: "Konzerttickets Sichern"
    },

    // =============================================================
    // // HANS-ZIMMER.HTML
    // =============================================================

    hz_back_link: {
      en: "← Back to Concert Programs",
      pl: "← Powrót do programów koncertowych",
      de: "← Zurück zu den Konzertprogrammen"
    },
    hz_hero_badge: {
      en: "Cinematic Live Series",
      pl: "Kinowa Seria na Żywo",
      de: "Kino-Live-Reihe"
    },
    hz_hero_title: {
      en: "Tribute to Hans Zimmer",
      pl: "Tribute to Hans Zimmer",
      de: "Tribute to Hans Zimmer"
    },
    hz_hero_desc: {
      en: "The iconic film scores of Hollywood’s master composer reimagined for string quartet with special guest vocalist Joanna Sinkiewicz.",
      pl: "Kultowe ścieżki dźwiękowe mistrza muzyki filmowej z Hollywood w nowej odsłonie na kwartet smyczkowy z gościnnym udziałem wokalistki Joanny Sinkiewicz.",
      de: "Die ikonischen Filmmusiken des Meisterkomponisten aus Hollywood, neu interpretiert für Streichquartett mit der Gastvokalistin Joanna Sinkiewicz."
    },
    hz_card_badge: {
      en: "Hollywood & Epic Soundtracks",
      pl: "Hollywood i Epickie Ścieżki Dźwiękowe",
      de: "Hollywood & Epische Soundtracks"
    },
    hz_card_title: {
      en: "A Symphony of Cinema & Voice",
      pl: "Symfonia Kina i Głosu",
      de: "Eine Symphonie aus Kino & Stimme"
    },
    hz_card_desc: {
      en: "We invite you to a unique musical evening where the classical elegance of a string quartet meets the nostalgia of the silver screen. Featuring moving compositions from Gladiator, Inception, Interstellar, The Lion King, James Bond, and Pirates of the Caribbean.",
      pl: "Zapraszamy na wyjątkowy wieczór muzyczny, w którym klasyczna elegancja kwartetu smyczkowego spotyka się z nostalgią wielkiego ekranu. W programie poruszające kompozycje z filmów Gladiator, Incepcja, Interstellar, Król Lew, James Bond i Piraci z Karaibów.",
      de: "Wir laden Sie zu einem einzigartigen musikalischen Abend ein, bei dem die klassische Eleganz eines Streichquartetts auf die Nostalgie der Kinoleinwand trifft. Mit bewegenden Kompositionen aus Gladiator, Inception, Interstellar, Der König der Löwen, James Bond und Fluch der Karibik."
    },
    hz_guest_title: {
      en: "Featured Guest Vocalist",
      pl: "Gościnny Wokal",
      de: "Gastvokalistin"
    },
    hz_guest_desc: {
      en: "Featuring Joanna Sinkiewicz, bringing lyrical and ethereal vocal layers that elevate Zimmer's minimalist motifs and pulsating rhythms into a cinematic journey.",
      pl: "Z udziałem Joanny Sinkiewicz, która wplata liryczne i eteryczne partie wokalne, wnosząc minimalistyczne motywy i pulsujące rytmy Zimmera na poziom kinowej podróży.",
      de: "Mit Joanna Sinkiewicz, die lyrische und ätherische Gesangsebenen beisteuert, welche Zimmers minimalistische Motive und pulsierende Rhythmen zu einer cineastischen Reise erheben."
    },
    hz_meta_masterworks: {
      en: "Hans Zimmer Masterworks",
      pl: "Arcydzieła Hansa Zimmera",
      de: "Hans Zimmer Meisterwerke"
    },
    hz_meta_quartet_vocal: {
      en: "String Quartet & Vocalist",
      pl: "Kwartet Smyczkowy i Wokal",
      de: "Streichquartett & Vokalistin"
    },
    hz_meta_runtime: {
      en: "~80 Mins",
      pl: "~80 Minut",
      de: "~80 Min."
    },
    hz_btn_dates_tickets: {
      en: "View Dates & Buy Tickets",
      pl: "Zobacz Daty i Kup Bilety",
      de: "Termine & Tickets Kaufen"
    },

    // Essay Section
    hz_essay_badge1: {
      en: "Artistic Concept",
      pl: "Koncepcja Artystyczna",
      de: "Künstlerisches Konzept"
    },
    hz_essay_title1: {
      en: "The Magic of the Silver Screen",
      pl: "Magia Wielkiego Ekranu",
      de: "Die Magie der Kinoleinwand"
    },
    hz_p1: {
      en: "We invite you to a unique musical evening where the classical elegance of a string quartet meets the nostalgia of the silver screen.",
      pl: "Zapraszamy na wyjątkowy wieczór muzyczny, podczas którego klasyczna elegancja kwartetu smyczkowego spotka się z filmową nostalgią.",
      de: "Wir laden Sie zu einem einzigartigen musikalischen Abend ein, bei dem die klassische Eleganz eines Streichquartetts auf die Filmstimmung der Kinoleinwand trifft."
    },
    hz_p2: {
      en: "The concert programme will feature some of the most beautiful and moving compositions by Hans Zimmer, one of the greatest film composers of our time. The audience will have the opportunity to hear music from films such as Gladiator, Inception, Interstellar, The Lion King, James Bond, and Pirates of the Caribbean.",
      pl: "W programie koncertu znajdą się najpiękniejsze i najbardziej poruszające kompozycje Hansa Zimmera – jednego z najwybitniejszych twórców muzyki filmowej naszych czasów. Tego wieczoru będzie można usłyszeć m.in. muzykę z takich filmów jak Gladiator, Incepcja, Interstellar, Król Lew, James Bond czy Piraci z Karaibów.",
      de: "Das Konzertprogramm umfasst einige der schönsten und bewegendsten Kompositionen von Hans Zimmer, einem der bedeutendsten Filmmusikkomponisten unserer Zeit. Das Publikum hat die Gelegenheit, Musik aus Filmen wie Gladiator, Inception, Interstellar, Der König der Löwen, James Bond und Fluch der Karibik zu erleben."
    },
    hz_p3: {
      en: "The subtle sound of the string quartet will reveal a new side of these well-known themes, giving them an intimate and profound chamber-music character. Zimmer’s minimalist motifs, gradually building tensions and distinctive pulsating rhythms gain exceptional clarity and emotional intensity in this setting.",
      pl: "Subtelne brzmienie kwartetu smyczkowego odsłoni nowe oblicze znanych tematów, nadając im kameralnej intymności i głębi. Minimalistyczne motywy, narastające napięcia i charakterystyczne pulsujące rytmy Zimmera w tej odsłonie zyskują wyjątkową przejrzystość i emocjonalną intensywność.",
      de: "Der subtile Klang des Streichquartetts offenbart eine neue Facette dieser bekannten Themen und verleiht ihnen einen intimen und tiefgründigen kammermusikalischen Charakter. Zimmers minimalistische Motive, allmählich aufbaubare Spannungen und markant pulsierende Rhythmen gewinnen in diesem Rahmen an außergewöhnlicher Klarheit und emotionaler Intensität."
    },
    hz_essay_badge2: {
      en: "Featured Soloist",
      pl: "Solistka Wieczoru",
      de: "Gastsolistin"
    },
    hz_essay_title2: {
      en: "Guest Vocalist: Joanna Sinkiewicz",
      pl: "Gość Specjalny: Wokalistka Joanna Sinkiewicz",
      de: "Gastvokalistin: Joanna Sinkiewicz"
    },
    hz_p4: {
      en: "We are delighted to welcome Joanna Sinkiewicz as a special guest — a vocalist with an exceptionally distinctive voice and remarkable interpretative sensitivity. Her participation in selected pieces, inspired by the original vocal parts, will add a lyrical and ethereal quality to the programme, transporting the audience into the world of cinematic storytelling.",
      pl: "Gościnnie podczas koncertu wystąpi Joanna Sinkiewicz – wokalistka o niezwykle wyrazistej barwie głosu i wrażliwości interpretacyjnej. Jej udział w wybranych utworach, inspirowanych oryginalnymi partiami wokalnymi, doda programowi liryzmu i eterycznego charakteru, przenosząc słuchaczy w świat filmowych opowieści.",
      de: "Wir freuen uns sehr, Joanna Sinkiewicz als besonderen Gast begrüßen zu dürfen – eine Vokalistin mit einer außergewöhnlich markanten Stimme und bemerkenswerter interpretatorischer Sensibilität. Ihre Mitwirkung bei ausgewählten Stücken, inspiriert von den originalen Vokalparts, verleiht dem Programm eine lyrische und ätherische Note und entführt das Publikum in die Welt filmischer Erzählungen."
    },
    hz_p5: {
      en: "An evening for film lovers, classical music enthusiasts, and everyone who would like to experience the magic of their favourite movies all over again — this time captured in the sound of four instruments and one extraordinary voice.",
      pl: "Wieczór dla miłośników kina, muzyki klasycznej i wszystkich tych, którzy chcą na nowo przeżyć magię ulubionych filmów – tym razem zamkniętą w brzmieniu czterech instrumentów i jednego wyjątkowego głosu.",
      de: "Ein Abend für Filmliebhaber, Liebhaber klassischer Musik und alle, die die Magie ihrer Lieblingsfilme noch einmal neu erleben möchten – diesmal eingefangen im Klang von vier Instrumenten und einer außergewöhnlichen Stimme."
    },

    // Sidebar & Specs
    hz_cast_badge: {
      en: "Lineup",
      pl: "Skład",
      de: "Besetzung"
    },
    hz_cast_title: {
      en: "Ensemble & Soloist",
      pl: "Zespół i Solistka",
      de: "Ensemble & Solistin"
    },
    hz_role_vocalist: {
      en: "Featured Guest Vocalist",
      pl: "Gościnny Wokal",
      de: "Gastvokalistin"
    },
    hz_ensemble_tag: {
      en: "Ensemble (Golden Star String Quartet)",
      pl: "Zespół (Kwartet Smyczkowy Golden Star)",
      de: "Ensemble (Golden Star Streichquartett)"
    },
    hz_specs_title: {
      en: "Program Details",
      pl: "Szczegóły Programu",
      de: "Programmdetails"
    },
    hz_spec_lbl_rep: {
      en: "Repertoire:",
      pl: "Repertuar:",
      de: "Repertoire:"
    },
    hz_spec_val_rep: {
      en: "Interstellar, Gladiator, Inception, The Lion King, James Bond, Pirates of the Caribbean.",
      pl: "Interstellar, Gladiator, Inception, Król Lew, James Bond, Piraci z Karaibów.",
      de: "Interstellar, Gladiator, Inception, Der König der Löwen, James Bond, Fluch der Karibik."
    },
    hz_spec_val_dur: {
      en: "~80 minutes (with intermission option).",
      pl: "~80 minut (z opcją przerwy).",
      de: "~80 Minuten (mit optionaler Pause)."
    },
    hz_spec_val_inst: {
      en: "2 Violins, Viola, Violoncello & Guest Vocalist.",
      pl: "2 skrzypce, altówka, wiolonczela i gościnny wokal.",
      de: "2 Violinen, Bratsche, Violoncello & Gastvokalistin."
    },
    hz_specs_btn_host: {
      en: "Host This Concert at Your Venue",
      pl: "Zorganizuj ten koncert w swojej sali",
      de: "Dieses Konzert für Ihren Spielort buchen"
    },

    // Bottom Banner
    hz_cta_badge: {
      en: "Upcoming Performance",
      pl: "Nadchodzący Występ",
      de: "Kommender Auftritt"
    },
    hz_cta_title: {
      en: "Experience Tribute to Hans Zimmer Live",
      pl: "Przeżyj Tribute to Hans Zimmer na Żywo",
      de: "Erleben Sie Tribute to Hans Zimmer Live"
    },
    hz_cta_desc: {
      en: "Join us on October 15, 2026 at Nowa Dekadencja in Szczecin, Poland.",
      pl: "Dołącz do nas 15 października 2026 r. w Nowej Dekadencji w Szczecinie.",
      de: "Seien Sie am 15. Oktober 2026 in der Nowa Dekadencja in Stettin (Polen) dabei."
    }


  };

  // Función principal para aplicar el idioma seleccionado
  function setLanguage(lang) {
    // 1. Traduce textos visibles normales
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[key] && translations[key][lang]) {
        element.textContent = translations[key][lang];
      }
    });

    // 2. Traduce placeholders en inputs y textareas
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
      const key = element.getAttribute('data-i18n-placeholder');
      if (translations[key] && translations[key][lang]) {
        element.setAttribute('placeholder', translations[key][lang]);
      }
    });

    // 3. Actualizar botones de idioma visualmente
    langButtons.forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // 4. Guardar preferencia en memoria del navegador
    localStorage.setItem('golden_star_lang', lang);
    document.documentElement.lang = lang;
  }

  // Event Listeners para los botones de cambio de idioma (EN | PL | DE)
  langButtons.forEach(button => {
    button.addEventListener('click', () => {
      const selectedLang = button.getAttribute('data-lang');
      setLanguage(selectedLang);
    });
  });

  // Cargar idioma guardado o predeterminado (Inglés)
  const savedLang = localStorage.getItem('golden_star_lang') || 'en';
  setLanguage(savedLang);



  // 4. Control de Acordeones de Ciudades (Tour Dates)
  const accordionHeaders = document.querySelectorAll('.city-accordion-header');
  
  accordionHeaders.forEach(headerBtn => {
    headerBtn.addEventListener('click', () => {
      const parentItem = headerBtn.parentElement;
      const isActive = parentItem.classList.contains('active');

      // Cerrar otros acordeones abiertos para mantener orden
      document.querySelectorAll('.city-accordion-item').forEach(item => {
        item.classList.remove('active');
      });

      // Alternar el actual
      if (!isActive) {
        parentItem.classList.add('active');
      }
    });
  });
});

// 5. Selección interactiva de paquetes de boda
  const packageButtons = document.querySelectorAll('.select-package-btn');
  const packageSelect = document.getElementById('selectedPackage');

  packageButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const packageName = button.getAttribute('data-package');
      if (packageSelect && packageName) {
        for (let i = 0; i < packageSelect.options.length; i++) {
          if (packageSelect.options[i].text.includes(packageName)) {
            packageSelect.selectedIndex = i;
            break;
          }
        }
      }
    });
  });


// 6. Envío asíncrono de Wedding Form mediante Web3Forms
const weddingForm = document.getElementById('weddingForm');
const resultMessage = document.getElementById('formResult');
const submitButton = document.getElementById('submitBtn');

if (weddingForm) {
  weddingForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(weddingForm);
    const originalText = submitButton.textContent;

    submitButton.textContent = 'Sending Inquiry...';
    submitButton.disabled = true;

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })
    .then(async (response) => {
      const json = await response.json();
      resultMessage.style.display = 'block';
      if (response.status === 200) {
        resultMessage.style.color = 'var(--gold-hover)';
        resultMessage.innerHTML = '✦ Thank you! Your wedding inquiry has been sent successfully. We will reply within 24 hours.';
        weddingForm.reset();
      } else {
        resultMessage.style.color = '#c0392b';
        resultMessage.innerHTML = json.message || 'Something went wrong. Please email us directly at gsmusictrio@gmail.com';
      }
    })
    .catch(() => {
      resultMessage.style.display = 'block';
      resultMessage.style.color = '#c0392b';
      resultMessage.innerHTML = 'Network error. Please try again or email us directly at gsmusictrio@gmail.com';
    })
    .finally(() => {
      submitButton.textContent = originalText;
      submitButton.disabled = false;
      setTimeout(() => {
        resultMessage.style.display = 'none';
      }, 8000);
    });
  });
}

// 7. Envío asíncrono de General Contact Form mediante Web3Forms
const generalForm = document.getElementById('generalContactForm');
const generalResult = document.getElementById('contactFormResult');
const generalSubmitBtn = document.getElementById('contactSubmitBtn');

if (generalForm) {
  generalForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(generalForm);
    const originalText = generalSubmitBtn.textContent;

    generalSubmitBtn.textContent = 'Sending Message...';
    generalSubmitBtn.disabled = true;

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })
    .then(async (response) => {
      const json = await response.json();
      generalResult.style.display = 'block';
      if (response.status === 200) {
        generalResult.style.color = 'var(--gold-hover)';
        generalResult.innerHTML = '✦ Thank you! Your message has been sent successfully. We will reply within 24 hours.';
        generalForm.reset();
      } else {
        generalResult.style.color = '#c0392b';
        generalResult.innerHTML = json.message || 'Something went wrong. Please email us directly at stella.karalis@goldenstarmusic.agency';
      }
    })
    .catch(() => {
      generalResult.style.display = 'block';
      generalResult.style.color = '#c0392b';
      generalResult.innerHTML = 'Network error. Please try again or email us directly at stella.karalis@goldenstarmusic.agency';
    })
    .finally(() => {
      generalSubmitBtn.textContent = originalText;
      generalSubmitBtn.disabled = false;
      setTimeout(() => {
        generalResult.style.display = 'none';
      }, 8000);
    });
  });
}


// 8. Filtrado de Conciertos por Categoría & URL Search Params
  const filterButtons = document.querySelectorAll('.filter-tab-btn');
  const concertItems = document.querySelectorAll('.city-accordion-item[data-category]');

  function applyCategoryFilter(category) {
    // Actualizar botón activo
    filterButtons.forEach(btn => {
      if (btn.getAttribute('data-filter') === category) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Filtrar elementos del acordeón
    concertItems.forEach(item => {
      const itemCategory = item.getAttribute('data-category');
      if (category === 'all' || itemCategory === category) {
        item.classList.remove('filtered-out');
        item.classList.add('fade-in-item');
      } else {
        item.classList.add('filtered-out');
        item.classList.remove('fade-in-item', 'active');
      }
    });
  }

  if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        applyCategoryFilter(filter);
      });
    });

    // Detectar parámetro ?tour= en la URL al cargar la página
    const urlParams = new URLSearchParams(window.location.search);
    const tourParam = urlParams.get('tour');
    if (tourParam) {
      applyCategoryFilter(tourParam);
    }
  }


// ================= 9. LIGHTBOX & FULLSCREEN MEDIA (UNIVERSAL) =================
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxContent = document.getElementById('lightboxContent');
  const lightboxBackdrop = document.getElementById('lightboxBackdrop');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
  const lightboxNextBtn = document.getElementById('lightboxNextBtn');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const lightboxTitle = document.getElementById('lightboxTitle');

  const galleryItems = document.querySelectorAll('#galleryContainer .gallery-item');
  let currentGalleryIndex = 0;

  // Colección de elementos de galería (si existen en la página)
  const galleryData = Array.from(galleryItems).map(item => ({
    src: item.getAttribute('data-src') || item.querySelector('img')?.src,
    alt: item.querySelector('img')?.getAttribute('alt') || 'Live Concert Impression'
  }));

  function openLightboxImage(src, titleText = 'Concert Production Poster') {
    if (!lightboxModal || !lightboxContent) return;
    lightboxContent.innerHTML = `<img src="${src}" alt="${titleText}">`;
    if (lightboxTitle) lightboxTitle.textContent = titleText;
    if (lightboxCounter) lightboxCounter.textContent = 'Artwork';

    if (lightboxPrevBtn) lightboxPrevBtn.style.display = 'none';
    if (lightboxNextBtn) lightboxNextBtn.style.display = 'none';

    lightboxModal.classList.add('active');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Bloquea scroll
  }

  function openGalleryIndex(index) {
    if (!lightboxModal || galleryData.length === 0) return;
    currentGalleryIndex = index;
    const currentItem = galleryData[currentGalleryIndex];

    lightboxContent.innerHTML = `<img src="${currentItem.src}" alt="${currentItem.alt}">`;
    if (lightboxCounter) lightboxCounter.textContent = `${currentGalleryIndex + 1} / ${galleryData.length}`;
    if (lightboxTitle) lightboxTitle.textContent = currentItem.alt;

    if (lightboxPrevBtn) lightboxPrevBtn.style.display = 'flex';
    if (lightboxNextBtn) lightboxNextBtn.style.display = 'flex';

    lightboxModal.classList.add('active');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function openLightboxVideo(videoSrc) {
    if (!lightboxModal || !lightboxContent) return;
    lightboxContent.innerHTML = `
      <video controls autoplay playsinline style="width: auto; height: 75vh; max-width: 90vw;">
        <source src="${videoSrc}" type="video/mp4">
        Your browser does not support HTML5 video.
      </video>
    `;
    if (lightboxCounter) lightboxCounter.textContent = 'Preview';
    if (lightboxTitle) lightboxTitle.textContent = 'Live Performance Teaser';

    if (lightboxPrevBtn) lightboxPrevBtn.style.display = 'none';
    if (lightboxNextBtn) lightboxNextBtn.style.display = 'none';

    lightboxModal.classList.add('active');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    lightboxModal.setAttribute('aria-hidden', 'true');
    lightboxContent.innerHTML = ''; // Detiene reproducción de vídeos
    document.body.style.overflow = '';
  }

  function showNextImage() {
    if (galleryData.length === 0) return;
    currentGalleryIndex = (currentGalleryIndex + 1) % galleryData.length;
    openGalleryIndex(currentGalleryIndex);
  }

  function showPrevImage() {
    if (galleryData.length === 0) return;
    currentGalleryIndex = (currentGalleryIndex - 1 + galleryData.length) % galleryData.length;
    openGalleryIndex(currentGalleryIndex);
  }

  // Activa el Lightbox para cualquier póster principal (Nosferatu, Hans Zimmer, MJ, etc.)
  const mainPosterTrigger = document.getElementById('mainPosterTrigger');
  if (mainPosterTrigger) {
    mainPosterTrigger.addEventListener('click', () => {
      const img = mainPosterTrigger.querySelector('img');
      const src = img?.getAttribute('data-src') || img?.src;
      const alt = img?.getAttribute('alt') || 'Official Production Poster';
      if (src) openLightboxImage(src, alt);
    });
  }

  // Activa la galería si existe
  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => openGalleryIndex(index));
  });

  // Botón de reproducción de teaser en pantalla completa dinámico
  const playTeaserBtn = document.getElementById('playTeaserBtn');
  const teaserVideoEl = document.getElementById('nosferatuTeaserVideo');

  if (playTeaserBtn && teaserVideoEl) {
    playTeaserBtn.addEventListener('click', () => {
      // Obtiene la ruta exacta del <source> que esté en el HTML
      const videoSource = teaserVideoEl.querySelector('source')?.getAttribute('src');
      if (videoSource) {
        openLightboxVideo(videoSource);
      }
    });
  }

  // Controles del Modal
  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
  if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', showNextImage);
  if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', showPrevImage);

  // Navegación con teclado (←, →, Escape)
  window.addEventListener('keydown', (e) => {
    if (!lightboxModal || !lightboxModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight' && lightboxNextBtn && lightboxNextBtn.style.display !== 'none') showNextImage();
    if (e.key === 'ArrowLeft' && lightboxPrevBtn && lightboxPrevBtn.style.display !== 'none') showPrevImage();
  });