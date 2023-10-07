const HEAD=(
    < div style={{
        width:"50px",
        height:"50px",
        borderRadius: "100%",
        border:"10px solid black",
        position:"absolute",
        top:"49px",
        right:"-25px",
    
    }}/>
)
const BODY=(
    < div 
    style={{
        width:"10px",
        height:"100px",
        background:"black",
        position:"absolute",
        top:"118px",
        right:0,
    
    }}/>
)
const RIGHT_ARM=(
    < div 
    style={{
        width:"100px",
        height:"10px",
        background:"black",
        position:"absolute",
        top:"150px",
        right:"-100px",
        rotate:"-30deg",
        transformOrigin:"left bottom"
    
    }}/>
)

const Left_ARM=(
    < div 
    style={{
        width:"100px",
        height:"10px",
        background:"black",
        position:"absolute",
        top:"125px",
        left:"240px",
        rotate:"30deg"
    
    }}/>
)
const Left_LEG=(
    < div 
    style={{
        width:"100px",
        height:"10px",
        background:"black",
        position:"absolute",
        top:"255px",
        left:"265px",
        rotate:"-65deg"
    
    }}/>
)
const Right_LEG=(
    < div 
    style={{
        width:"100px",
        height:"10px",
        background:"black",
        position:"absolute",
        top:"255px",
        left:"305px",
        rotate:"65deg"
    
    }}/>
)


const BODY_PARTS=[
    HEAD,BODY,RIGHT_ARM,Left_ARM,Right_LEG,Left_LEG
]
type HangmanDrawingProps={
    numberOfGuesses:number

}

export function HangmanDrawing({numberOfGuesses}:HangmanDrawingProps


){
    return (
        <div style={{position:"relative"}}>
            {BODY_PARTS.slice(0,numberOfGuesses)}
            <div style={{
                                    height:"10px",
                                    width:"220px",
                                    background:"black",
                                    marginLeft:"120px",
                                    right:0
            }}/>
            <div style={{
                                    height:"400px",
                                    width:"10px",
                                    background:"black",
                                    marginLeft:"120px",
            }}/>
            {/* middle */}
            <div 
            style={{
                height:"50px",
                width:"10px",
                background:"black",
                position:"absolute",
                top:0,
                right:0,
}}
                />
                {/* bottom */}
                <div style={{
                    height:"10px",
                    width:"250px",
                    background:"black",
                    
                }}/>

        </div>
        )
}