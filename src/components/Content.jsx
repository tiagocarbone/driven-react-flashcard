import Questions from "./Questions"

export default function Content({cards, setCont }) {
    return(
        <>
            
            <Questions cards={cards} setCont={setCont} />
        </>
    )
}