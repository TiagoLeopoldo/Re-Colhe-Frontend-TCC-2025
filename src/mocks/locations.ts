export type Location = {
  id: number;
  name: string;
  address: string;
  openTime: string;
  closeTime: string;
  openingDays: string;
  phone: string;
  materials: string[];
  position: [number, number];
};

export const mockLocations: Location[] = [
  // Papel
  { id: 1, name: 'Papel Recicla 1', address: 'Rua A, 100', openingDays: 'seg. a sex.' , openTime: '08:00', closeTime: '17:00', phone: '(21) 90000-0001', materials: ['papel'], position: [-22.751, -43.301] },
  { id: 2, name: 'Papel Recicla 2', address: 'Rua B, 200', openingDays: 'seg. a sex.' , openTime: '08:00', closeTime: '17:00', phone: '(21) 90000-0002', materials: ['papel'], position: [-22.752, -43.302] },
  { id: 3, name: 'Papel Recicla 3', address: 'Rua C, 300', openingDays: 'seg. a sex.' , openTime: '08:00', closeTime: '17:00', phone: '(21) 90000-0003', materials: ['papel'], position: [-22.753, -43.303] },
  { id: 4, name: 'Papel Recicla 4', address: 'Rua D, 400', openingDays: 'seg. a sex.' , openTime: '08:00', closeTime: '17:00', phone: '(21) 90000-0004', materials: ['papel'], position: [-22.754, -43.304] },
  { id: 5, name: 'Papel Recicla 5', address: 'Rua E, 500', openingDays: 'seg. a sex.' , openTime: '08:00', closeTime: '17:00', phone: '(21) 90000-0005', materials: ['papel'], position: [-22.755, -43.305] },

  // Plástico
  { id: 6, name: 'Plástico Recicla 1', address: 'Av. A, 101', openingDays: 'seg. a sex.' , openTime: '08:00', closeTime: '17:00', phone: '(21) 91111-0001', materials: ['plástico', 'plastico'], position: [-22.756, -43.306] },
  { id: 7, name: 'Plástico Recicla 2', address: 'Av. B, 201', openingDays: 'seg. a sex.' , openTime: '08:00', closeTime: '17:00', phone: '(21) 91111-0002', materials: ['plástico', 'plastico'], position: [-22.757, -43.307] },
  { id: 8, name: 'Plástico Recicla 3', address: 'Av. C, 301', openingDays: 'seg. a sex.' , openTime: '08:00', closeTime: '17:00', phone: '(21) 91111-0003', materials: ['plástico', 'plastico'], position: [-22.758, -43.308] },
  { id: 9, name: 'Plástico Recicla 4', address: 'Av. D, 401', openingDays: 'seg. a sex.' , openTime: '08:00', closeTime: '17:00', phone: '(21) 91111-0004', materials: ['plástico', 'plastico'], position: [-22.759, -43.309] },
  { id: 10, name: 'Plástico Recicla 5', address: 'Av. E, 501', openingDays: 'seg. a sex.' , openTime: '08:00', closeTime: '17:00', phone: '(21) 91111-0005', materials: ['plástico', 'plastico'], position: [-22.760, -43.310] },

  // Metal
  { id: 11, name: 'Metal Recicla 1', address: 'Trav. A, 102', openingDays: 'seg. a sex.' , openTime: '08:00', closeTime: '17:00', phone: '(21) 92222-0001', materials: ['metal'], position: [-22.761, -43.311] },
  { id: 12, name: 'Metal Recicla 2', address: 'Trav. B, 202', openingDays: 'seg. a sex.' , openTime: '08:00', closeTime: '17:00', phone: '(21) 92222-0002', materials: ['metal'], position: [-22.762, -43.312] },
  { id: 13, name: 'Metal Recicla 3', address: 'Trav. C, 302', openingDays: 'seg. a sex.' , openTime: '08:00', closeTime: '17:00', phone: '(21) 92222-0003', materials: ['metal'], position: [-22.763, -43.313] },
  { id: 14, name: 'Metal Recicla 4', address: 'Trav. D, 402', openingDays: 'seg. a sex.' , openTime: '08:00', closeTime: '17:00', phone: '(21) 92222-0004', materials: ['metal'], position: [-22.764, -43.314] },
  { id: 15, name: 'Metal Recicla 5', address: 'Trav. E, 502', openingDays: 'seg. a sex.' , openTime: '08:00', closeTime: '17:00', phone: '(21) 92222-0005', materials: ['metal'], position: [-22.765, -43.315] },

  // Vidro
  { id: 16, name: 'Vidro Recicla 1', address: 'Al. A, 103', openingDays: 'seg. a sex.' , openTime: '08:00', closeTime: '17:00', phone: '(21) 93333-0001', materials: ['vidro'], position: [-22.766, -43.316] },
  { id: 17, name: 'Vidro Recicla 2', address: 'Al. B, 203', openingDays: 'seg. a sex.' , openTime: '08:00', closeTime: '17:00', phone: '(21) 93333-0002', materials: ['vidro'], position: [-22.767, -43.317] },
  { id: 18, name: 'Vidro Recicla 3', address: 'Al. C, 303', openingDays: 'seg. a sex.' , openTime: '08:00', closeTime: '17:00', phone: '(21) 93333-0003', materials: ['vidro'], position: [-22.768, -43.318] },
  { id: 19, name: 'Vidro Recicla 4', address: 'Al. D, 403', openingDays: 'seg. a sex.' , openTime: '08:00', closeTime: '17:00', phone: '(21) 93333-0004', materials: ['vidro'], position: [-22.769, -43.319] },
  { id: 20, name: 'Vidro Recicla 5', address: 'Al. E, 503', openingDays: 'seg. a sex.' , openTime: '08:00', closeTime: '17:00', phone: '(21) 93333-0005', materials: ['vidro'], position: [-22.770, -43.320] },
];
