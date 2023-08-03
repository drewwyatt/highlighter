export type Speaker = { name: string; title: string; company: string }

const data: Speaker[] = [
  { name: 'Ryan MacLean', title: '', company: 'Datadog' },

  { name: 'Jamie Milstein', title: 'Product Manager', company: 'Datadog' },

  { name: 'Toli Apostolidis', title: 'Principal Engineer', company: 'Flipdish' },

  { name: 'Brian Chambers', title: 'Chief Architect', company: 'Chick-fil-A' },

  { name: 'Alex Crane', title: 'Enterprise Architect', company: 'Chick-fil-A' },

  {
    name: 'Kasi Viswanathan',
    title: 'Sr Manager, IT Systems Engineering',
    company: 'Marsh McLennan',
  },

  { name: 'Zach McCormick', title: 'Staff Software Engineer', company: 'Braze' },

  { name: 'Rahel Maharani', title: 'Senior Product Manager', company: 'Delivery Hero' },

  { name: 'Sophia Russell', title: 'Staff Engineer', company: 'Betterment' },

  { name: 'José Lorenzo Rodríguez', title: 'Director of Engineering', company: 'Boozt' },

  {
    name: 'Matt Farley',
    title: 'Director, Infrastructure & Technology',
    company: 'Asian Development Bank',
  },

  { name: 'Shlomo Bielak', title: 'VP of Engineering', company: 'theScore' },

  { name: 'Kohei Sato', title: 'Sr Manager', company: 'NTT DOCOMO' },

  { name: 'Marcelo Quadros', title: 'Software Expert', company: 'Mercado Libre' },

  { name: 'Juliano Martins', title: 'Sr. Tech Manager', company: 'Mercado Libre' },

  {
    name: 'Eduardo Serrano',
    title: 'Information Technology Operations Manager',
    company: 'T-Conecta (Grupo Bimbo)',
  },

  { name: 'Ashley Parks', title: 'Senior DevOps Engineer', company: 'Toyota Connected' },

  { name: 'Nikos Katirtzis', title: '', company: 'Expedia' },

  { name: 'Parth Shukla', title: '', company: 'Cequence Security' },

  { name: 'Mikael Nilsson', title: 'Product Security Lead', company: 'SAS Institute' },

  { name: 'Mitch Ward', title: 'Sr. Engineering Manager', company: 'Datadog' },

  { name: 'Kaushik Patel', title: '', company: 'Expedia' },

  { name: 'Jason Yee', title: 'Staff Technical Advocate', company: 'Datadog' },

  { name: 'Andrew Krug', title: 'Manager, Technical Advocacy', company: 'Datadog' },

  { name: 'Sean Schaab', title: 'Manager, Sales Engineering', company: 'Datadog' },

  {
    name: 'Mayumi Worgotter',
    title: 'Director, Internal Communications & DEI',
    company: 'Datadog',
  },

  { name: 'Jaime Woo', title: 'Head of Product, SRE', company: 'Indeed' },

  { name: 'Kristie Baker', title: 'SRE Engineering Leader', company: 'Netflix' },

  {
    name: 'Till Pieper',
    title: 'Director, Product Management (CoScreen co-founder)',
    company: 'Datadog',
  },

  { name: 'Ganesh Datta', title: 'Co-founder & CTO', company: 'Cortex' },

  {
    name: 'James Bell',
    title: 'Principal Software Engineer',
    company: 'Samsung SmartThings',
  },

  {
    name: 'Saba El-Hilo',
    title: 'Senior VP of Engineering and Data',
    company: 'Unbounce',
  },

  { name: 'Victor Chen', title: 'Senior Software Engineer', company: 'Airbnb' },

  { name: 'Alexis Lê-Quôc', title: 'CTO & Co-Founder', company: 'Datadog' },

  { name: 'Barry Eom', title: 'Product Manager', company: 'Datadog' },

  {
    name: 'Emilio Escobar',
    title: 'Chief Information Security Officer',
    company: 'Datadog',
  },

  {
    name: 'Benjamin Vulpes',
    title: 'Director of Mobile Engineering',
    company: 'SeaWorld',
  },

  { name: "Nielet D'mello", title: 'Security Engineer', company: 'Datadog' },

  { name: 'Tay Nishimura', title: 'Technical Program Manager', company: 'Datadog' },

  { name: 'Michael Gerstenhaber', title: 'VP of Product Management', company: 'Datadog' },

  { name: 'Sajid Mehmood', title: 'VP of Engineering', company: 'Datadog' },

  {
    name: 'Chandru Subramanian',
    title: 'Director of Runtime Efficiency',
    company: 'Datadog',
  },

  { name: 'Shri Subramanian', title: 'Senior Product Manager', company: 'Datadog' },

  { name: 'Olivier Pomel', title: 'CEO & Co-Founder', company: 'Datadog' },

  { name: 'Amit Agarwal', title: 'President', company: 'Datadog' },

  { name: 'Junaid Ahmed', title: 'Vice President, Engineering', company: 'Datadog' },

  { name: 'Kai Xin Tai', title: 'Product Manager', company: 'Datadog' },

  { name: 'Sid Dhingra', title: 'Senior Product Manager', company: 'Datadog' },

  { name: 'Irene Kors', title: 'Staff Product Manager', company: 'Datadog' },

  { name: 'Rishi Ilangomaran', title: 'Product Manager', company: 'Datadog' },

  { name: 'Partha Naidu', title: 'Senior Product Manager', company: 'Datadog' },

  { name: 'Bryan Lee', title: 'Senior Product Manager', company: 'Datadog' },

  { name: 'Haïssam Kaj', title: 'Manager II, Engineering', company: 'Datadog' },

  { name: 'Natasha Goel', title: 'Product Manager', company: 'Datadog' },

  {
    name: 'Mike Lory',
    title: 'Manager of InfoSec & Privacy',
    company: 'SAMSUNG SmartThings',
  },

  { name: 'Dustin Ingram', title: 'Staff Software Engineer', company: 'Google' },

  { name: 'Nate Vogel', title: 'VP Data Platforms', company: 'Charter Communications' },

  { name: 'Neil Innes', title: 'Sr. Engineering Manager', company: 'FanDuel' },

  { name: 'Eric Chiang', title: 'Engineer', company: 'Google' },

  { name: 'Laura de Vesine', title: 'Staff Engineer', company: 'Datadog' },

  { name: 'Sarah Guo', title: 'Founder', company: 'Conviction' },

  { name: 'André Arko', title: '', company: 'RubyGems' },

  { name: 'Prashant Pandey', title: 'Head of Engineering', company: 'Asana' },
]

export default data
