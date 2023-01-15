import { BigContainer } from "./big-container.model";
import { Cash } from "./cash.model";
import { Slot } from "./slot.model";

const minCoinCount = 3;
const maxCoinCount = 10;
const maxSlotUnit = 100;

export class CashContainer {

    constructor(public slots: Slot[], public bigContainer: BigContainer) { }
    static getContainer(): CashContainer {
        let slots: Slot[] = [];
        const slot100 = new Slot("Slot100", 100, maxCoinCount);
        slots.push(slot100);
        const slot50 = new Slot("Slot50", 50, maxCoinCount);
        slots.push(slot50);
        const slot20 = new Slot("Slot20", 20, maxCoinCount);
        slots.push(slot20);
        const slot10 = new Slot("Slot10", 10, maxCoinCount);
        slots.push(slot10);
        const slot5 = new Slot("Slot5", 5, maxCoinCount);
        slots.push(slot5);
        const bigContainer: BigContainer = new BigContainer("Big container", 0);
        return new CashContainer(slots, bigContainer);
    }
    reset() {
        this.slots.forEach(slot => {
            slot.count = maxCoinCount;
        });
        this.bigContainer.amount = 0;
    }
    pushCash(cash: Cash) {
        if (cash.unit > maxSlotUnit) {
            this.bigContainer.amount += cash.unit;
        } else {
            const found = this.slots.find(slot => slot.cashUnit === cash.unit);
            if (found && found.count < maxCoinCount) {
                found.count += cash.count;
            } else {
                this.bigContainer.amount += cash.count * cash.unit;
            }
        }
    }
    pullCash(amount: number): number {
        let moneyleft = amount;
        this.slots.forEach(slot => {
            if ((slot.count - minCoinCount > 0) && (moneyleft >= slot.cashUnit)) {
                const pulledCoins = Math.trunc(moneyleft / slot.cashUnit);
                const maxPullable = slot.count - minCoinCount;
                if (pulledCoins > maxPullable) {
                    moneyleft -= maxPullable * slot.cashUnit;
                    slot.count -= maxPullable;
                } else {
                    moneyleft -= pulledCoins * slot.cashUnit;
                    slot.count -= pulledCoins;
                }
            }
        })
        return amount - moneyleft;
    }
}



