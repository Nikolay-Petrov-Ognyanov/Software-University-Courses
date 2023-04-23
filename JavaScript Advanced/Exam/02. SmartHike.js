class SmartHike {
    constructor(username) {
        this.username = username
        this.goals = {}
        this.listOfHikes = []
        this.resources = 100
    }

    addGoal(peak, altitude) {
        if (this.goals.hasOwnProperty(peak) === true) {
            return `${peak} has already been added to your goals`
        } else {
            this.goals[peak] = altitude

            return `You have successfully added a new goal - ${peak}`
        }
    }

    hike(peak, time, difficultyLevel) {
        if (this.goals.hasOwnProperty(peak) === false) {
            throw new Error(`${peak} is not in your current goals`)
        } else if (this.goals.hasOwnProperty(peak) === true && this.resources === 0) {
            throw new Error(`You don't have enough resources to start the hike`)
        }

        if ((this.resources - (time * 10)) < 0) {
            return `You don't have enough resources to complete the hike`
        } else {
            this.resources -= (time * 10)

            this.listOfHikes.push({
                peak,
                time,
                difficultyLevel
            })

            return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`
        }
    }

    rest(time) {
        this.resources += (time * 10)

        if (this.resources >= 100) {
            this.resources = 100

            return `Your resources are fully recharged. Time for hiking!`
        } else {
            return `You have rested for ${time} hours and gained ${time * 10}% resources`
        }
    }

    showRecord(criteria) {
        if (this.listOfHikes.length > 0) {
            if (criteria === "hard" || criteria === "easy") {
                let sortedByCriteria = this.listOfHikes.filter((x) => x.difficultyLevel === criteria)

                if (sortedByCriteria.length > 0) {
                    let sortedByTime = sortedByCriteria.sort((a, b) => a.time - b.time)
                    let bestHike

                    if (sortedByTime.length > 1) {
                        bestHike = this.listOfHikes.find((x) => x.time === sortedByTime[0].time)
                    } else {
                        bestHike = sortedByTime[0]
                    }

                    return `${this.username}'s best ${bestHike.difficultyLevel} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`
                } else {
                    return `${this.username} has not done any ${criteria} hiking yet`
                }
            } else if (criteria === "all") {
                let resultArray = [`All hiking records:`]

                for (let hike of this.listOfHikes) {
                    resultArray.push(`${this.username} hiked ${hike.peak} for ${hike.time} hours`)
                }

                return resultArray.join("\n")
            }
        } else {
            return `${this.username} has not done any hiking yet`
        }
    }
}

const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));