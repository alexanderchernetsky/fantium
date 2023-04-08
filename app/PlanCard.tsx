import Image from 'next/image'

import {ICardData, Plans, PlanStatuses} from "@/app/page";

import styles from "@/app/styles.module.css";


export default function PlanCard({plan, image, percentageOfOwnership, price, perks, status}: ICardData) {
    return (
        <div className={styles.cardWrapper}>
            <div className={styles.topSection}>
                <Image
                    src={`/images/${image}`}
                    alt={plan}
                    className={styles.image}
                    width={304}
                    height={427}
                    priority
                />
                <div className={styles.flexWrapper}>
                    <div className={styles.planInfo}>
                        <span className={styles.planName}>{plan}</span>
                        <span className={styles.percentageOfOwnership}>{percentageOfOwnership}%</span>
                    </div>
                    <div className={styles.sectionName}>
                        Ownership / Token
                    </div>
                </div>
            </div>

            <div className={styles.bottomSection}>
                <div className={styles.price}>{price}$</div>
                {perks.map((perk, index) => {
                    return (
                        <div className={styles.perk} key={index}>
                            <div className={styles.perkIcon}>
                                <Image
                                    src={`/icons/${perk.image}`}
                                    alt={plan}
                                    className={styles.image}
                                    width={12}
                                    height={12}
                                    priority={false}
                                />
                            </div>
                            <span className={styles.perkDescription}>{perk.description}</span>
                        </div>
                    )
                })}

                <button className={styles.button} style={{backgroundColor: plan === Plans.Gold ? '#FFFFFF' : '#BCFF1E'}} disabled={status === PlanStatuses.Disabled}>Buy On Open Sea</button>
            </div>
        </div>
    )
}
