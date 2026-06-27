import TopicCard from "./TopicCard";

export default function DayCard({ day, number }) {

    return (

        <div className="day-card">

            <div className="day-header">

                <div>

                    <h2>
                        Day {number}
                    </h2>

                    <h3>
                        {day?.day_of_week}
                    </h3>

                    <small>{day?.date}</small>

                </div>

                <span>{day?.total_study_hours} hrs</span>

            </div>

            <div className="topics-grid">

                {day?.topics?.map((topic,index)=>(
                    <TopicCard
                        key={index}
                        topic={topic}
                    />
                ))}

            </div>

        </div>

    )

}