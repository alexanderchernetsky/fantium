import Image from "next/image";

import PlanCard from "@/app/PlanCard";

import styles from './page.module.css';



export enum PlanStatuses {
  Enabled = 'Enabled',
  Disabled = 'Disabled'
}

export enum Plans {
  Bronze = 'Bronze',
  Silver = 'Silver',
  Gold = 'Gold'
}

export interface Perk {
  image: string,
  description: string
}

export interface ICardData {
  id: string,
  plan: Plans,
  image: string,
  percentageOfOwnership: number,
  collections_remaining: number,
  price: number,
  perks: Perk[],
  status: PlanStatuses
}

// todo: fetch from the API
const mockCards: ICardData[] = [
  {
    id: '1',
    plan: Plans.Bronze,
    image: 'bronze.png',
    percentageOfOwnership: 0.0021,
    collections_remaining: 809,
    price: 99,
    perks: [{image: 'diamond.png', description: 'Access to FANtium Discord channel'}],
    status: PlanStatuses.Enabled
  },
  {
    id: '2',
    plan: Plans.Silver,
    image: 'silver.png',
    percentageOfOwnership: 0.0108,
    collections_remaining: 100,
    price: 499,
    perks: [
      {image: 'diamond.png', description: 'Early access (allowlist) on the next Thiem NFT drop'},
      {image: 'hand.png', description: 'Exclusive workout video'}
    ],
    status: PlanStatuses.Enabled
  },
  {
    id: '3',
    plan: Plans.Gold,
    image: 'gold.png',
    percentageOfOwnership: 0.2171,
    collections_remaining: 10,
    price: 9999,
    perks: [
      {image: 'diamond.png', description: 'Meet & greet at one tournament on the ATP tour'},
      {image: 'hand.png', description: 'Access to a private chat with the'}
    ],
    status: PlanStatuses.Enabled
  }
]

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.contentWrapper}>
        <section className={styles.cardsWrapper}>
          {mockCards.map(card => {
            return (
                <div className={styles.plan} key={card.id}>
                  <PlanCard {...card} />
                  <div className={styles.remaining}>{card.collections_remaining} Tokens</div>
                </div>
            )
          })}
        </section>

        <div className={styles.linkWrapper}>
          <span className={styles.linkText}>Valuation method &nbsp;</span>
          <Image
              src='/icons/arrow.png'
              alt='link arrow'
              className={styles.image}
              width={28}
              height={28}
              priority={false}
          />
        </div>
      </div>
    </main>
  )
}
