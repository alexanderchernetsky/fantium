'use client'; // we need to use React hooks

import {useEffect, useState} from "react";
import Image from "next/image";

import Loading from "@/components/Loading/Loading";
import Error from "@/components/Error/Error";
import PlanCard from "@/components/PlanCard/PlanCard";

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


export default function Home() {
  // todo: use Redux/RTK
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState<ICardData[]>([]);

  useEffect(() => {
    // todo: use axios
    fetch('/api/plans')
        .then(res => res.json())
        .then((res =>  {
          setCards(res);
        }))
        .catch((error) => {
          console.error(error);
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        })
  }, [])

  return (
      <Loading isLoading={loading}>
        <Error isError={error}>
          <main className={styles.main}>
            <div className={styles.contentWrapper}>
              <section className={styles.cardsWrapper}>
                {cards.map(card => {
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
        </Error>
      </Loading>
  )
}
