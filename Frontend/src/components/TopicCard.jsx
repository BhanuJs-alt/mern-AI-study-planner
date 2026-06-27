export default function TopicCard({ topic }) {

    return(

        <div className="topic-card">

            <h3>{topic?.topic_name}</h3>

            <span>{topic?.duration_hours} hrs</span>

            <ul>

                {topic?.activities?.map((activity,index)=>(
                    <li key={index}>
                        {activity}
                    </li>
                ))}

            </ul>

        </div>

    )

}