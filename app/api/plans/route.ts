const mockCards = [
  {
    id: '1',
    plan: 'Bronze',
    image: 'bronze.png',
    percentageOfOwnership: 0.0021,
    collections_remaining: 809,
    price: 99,
    perks: [{image: 'diamond.png', description: 'Access to FANtium Discord channel'}],
    status: 'Enabled'
  },
  {
    id: '2',
    plan: 'Silver',
    image: 'silver.png',
    percentageOfOwnership: 0.0108,
    collections_remaining: 100,
    price: 499,
    perks: [
      {image: 'diamond.png', description: 'Early access (allowlist) on the next Thiem NFT drop'},
      {image: 'hand.png', description: 'Exclusive workout video'}
    ],
    status: 'Enabled'
  },
  {
    id: '3',
    plan: 'Gold',
    image: 'gold.png',
    percentageOfOwnership: 0.2171,
    collections_remaining: 10,
    price: 9999,
    perks: [
      {image: 'diamond.png', description: 'Meet & greet at one tournament on the ATP tour'},
      {image: 'hand.png', description: 'Access to a private chat with the'}
    ],
    status: 'Enabled'
  }
]

export async function GET(request: Request) {
  // todo: query database and get card data
  return new Response(JSON.stringify(mockCards), { status: 200 })
}
