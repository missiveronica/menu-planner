const MyList = ({addMeal, mealPlans, deleteDay, selectedDay, setSelectedDay}) => {
        return (
            <div>
                <div>
                    <h1>Weekly Meal Plan Ideas</h1>
                    <button className="button-add" onClick={addMeal}>Add</button>
                   <div>
                    {mealPlans.map( ({title, id, mealForADay}) => (
<div className= {`meal ${id === selectedDay ? "selected" : "default"}`} onClick={() => setSelectedDay(id)}>
    <p className="field">{title}</p>
    <p className="field">{mealForADay.substring(0,60)}</p>
    <button onClick={() => deleteDay(id)} className="button-delete">Delete</button>
</div>
                    ))}
                    </div>
                </div>
            </div>
        )
}
export default MyList;