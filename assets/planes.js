const planes = {
  'Gulfstream G500': {
    name: 'Gulfstream G500',
    tagline: 'The full package for long-range flights',
    content:
      'Take a flight with our technologically most advanced and luxurious jet. The fastest aircraft in its class combined with plenty of space is your best choice for long distance flights.',
    entryImage: require(`@/assets/plane/gulfstreamG500.jpeg`),
    coverImage: require(`@/assets/web/Gulfstream G500/SL7_4804_0-Bearbeitet.jpg`),
    floorplan: require(`@/assets/plane/floorplan_gulfstreamG500_day.png`),
    floorplan_night: require(`@/assets/plane/floorplan_gulfstreamG500_night.png`),
    tourUrl: 'https://jet-pano.net/bairline/lub/',
    rangeMap: require(`@/assets/maps/map-gulfstreamG500.jpg`),
    facts: {
      height: 'Height: 6.17 ft / 1.88 m',
      width: 'Width: 7.58 ft / 2.31 m',
      length: 'Length: 41.50 ft / 12.65 m',
      range: 'Flight Range: 5.300 nm / 9.816 km',
      passengers: 'Up to 13 passengers',
      luggage: 'Luggage Capacity: 175 ft³ / 4.96 m³',
      manufactured: 'Manufactured 2020',
      speed: 'Cruise Speed: Mach 0.925 / 1.105 kph'
    },
    gallery: [
      require('@/assets/web/Gulfstream G500/SL7_4549-Bearbeitet.jpg'),
      require('@/assets/web/Gulfstream G500/SL7_4573-Bearbeitet.jpg'),
      require('@/assets/web/Gulfstream G500/SL7_4591-Bearbeitet.jpg'),
      require('@/assets/web/Gulfstream G500/SL7_4630-Bearbeitet.jpg'),
      require('@/assets/web/Gulfstream G500/SL7_4726-Bearbeitet.jpg'),
      require('@/assets/web/Gulfstream G500/SL7_4561-Bearbeitet.jpg'),
      require('@/assets/web/Gulfstream G500/SL7_4636-Bearbeitet.jpg'),
      require('@/assets/web/Gulfstream G500/SL7_4735-Bearbeitet.jpg'),
      require('@/assets/web/Gulfstream G500/SL7_4585-Bearbeitet.jpg'),
      require('@/assets/web/Gulfstream G500/SL7_4732-Bearbeitet.jpg'),
      require('@/assets/web/Gulfstream G500/SL7_4585_2-Bearbeitet.jpg'),
      require('@/assets/web/Gulfstream G500/SL7_4579_2-Bearbeitet.jpg'),
      require('@/assets/web/Gulfstream G500/SL7_4594-Bearbeitet.jpg'),
      require('@/assets/web/Gulfstream G500/SL7_4564-Bearbeitet.jpg'),
      require('@/assets/web/Gulfstream G500/SL7_4579-Bearbeitet.jpg'),
      require('@/assets/web/Gulfstream G500/SL7_4606-Bearbeitet.jpg'),
      require('@/assets/web/Gulfstream G500/SL7_4600-Bearbeitet.jpg'),
      require('@/assets/web/Gulfstream G500/SL7_4612-Bearbeitet.jpg'),
      require('@/assets/web/Gulfstream G500/SL7_4663-Bearbeitet.jpg'),
      require('@/assets/web/Gulfstream G500/SL7_4681-Bearbeitet.jpg'),
      require('@/assets/web/Gulfstream G500/SL7_4762-Bearbeitet.jpg'),
      require('@/assets/web/Gulfstream G500/SL7_4618-Bearbeitet.jpg'),
      require('@/assets/web/Gulfstream G500/SL7_4549-Bearbeitet.jpg'),
      require('@/assets/web/Gulfstream G500/SL7_4708-Bearbeitet.jpg'),
      require('@/assets/web/Gulfstream G500/SL7_4555-Bearbeitet.jpg')
    ]
  },
  'Citation X': {
    name: 'Citation X',
    tagline: 'The fastest business jet in the world',
    content:
      'You would like to get as fast as possible to your destination? Then this aircraft is definitely the right choice. Flying almost at the speed of sound, the countries below you are changing in no time.',
    entryImage: require(`@/assets/plane/SLT_0809-Bearbeitet.jpg`),
    coverImage: require(`@/assets/plane/citationX.jpg`),
    floorplan: require(`@/assets/plane/floorplan_citationX.png`),
    floorplan_night: require(`@/assets/plane/floorplan_citationX_night.png`),
    tourUrl: 'https://jetpano.eu/bairline/hub/tour.html',
    rangeMap: require(`@/assets/maps/map-citationX.gif`),
    facts: {
      height: 'Height: 5.67 ft / 1.73 m',
      width: 'Width: 5.51 ft / 1.68 m',
      length: 'Length: 29.43 ft / 8.97 m',
      range: 'Flight Range: 3.000 nm / 5.556 km',
      passengers: 'Up to 9 passengers',
      luggage: 'Luggage Capacity: 70.63 ft³ / 2 m³',
      manufactured: 'Manufactured 2007',
      speed: 'Cruise Speed: Mach 0.92 / 1.100 kph'
    },
    factSheet: '/downloads/CITX Fact Sheet.pdf',
    gallery: [
      require('@/assets/web/CitationX/SLT_0728-Bearbeitet.jpg'),
      require('@/assets/web/CitationX/SLT_0731-Bearbeitet.jpg'),
      require('@/assets/web/CitationX/SLT_0734-Bearbeitet.jpg'),
      require('@/assets/web/CitationX/SLT_0737-Bearbeitet.jpg'),
      require('@/assets/web/CitationX/SLT_0740-Bearbeitet.jpg'),
      require('@/assets/web/CitationX/SLT_0746-Bearbeitet.jpg')
    ]
  },
  'Citation CJ 2': {
    name: 'Citation CJ 2',
    tagline: 'The light jet for medium-haul flights',
    content:
      'This aircraft gives you agility at a highly competitive pricing. Quick turnarounds and good performance can be your partner in the air when choosing special destinations.',
    entryImage: require(`@/assets/web/CJ2/SLT_5975-Bearbeitet.jpg`),
    coverImage: require(`@/assets/web/CJ2/SLT_5987-Bearbeitet.jpg`),
    floorplan: require(`@/assets/plane/floorplan_citationCJ2.png`),
    tourUrl: 'https://jetpano.eu/bairline/fux/tour.html',
    rangeMap: require(`@/assets/maps/map-citationCJ2.gif`),
    facts: {
      height: 'Height: 4.75 ft / 1.45 m',
      width: 'Width: 4.83 ft / 1.47 m',
      length: 'Length: 18.5 ft / 5.64 m',
      range: 'Flight Range: 1.300 nm / 2.407 km',
      passengers: 'Up to 6 passengers',
      luggage: 'Luggage Capactity: 70 ft³ / 1.98 m³',
      manufactured: 'Manufactured 2002',
      speed: 'Cruise Speed: Mach 0.72 / 764 kph'
    },
    factSheet: '/downloads/Fact sheet OEFUX.pdf',
    gallery: [
      require('@/assets/web/CJ2/SLT_5919-Bearbeitet.jpg'),
      require('@/assets/web/CJ2/SLT_5935-Bearbeitet.jpg'),
      require('@/assets/web/CJ2/SLT_5949-Bearbeitet.jpg'),
      require('@/assets/web/CJ2/SLT_5953-Bearbeitet.jpg'),
      require('@/assets/web/CJ2/SLT_5959-Bearbeitet.jpg'),
      require('@/assets/web/CJ2/SLT_5968-Bearbeitet.jpg')
    ]
  }
}

export default planes
