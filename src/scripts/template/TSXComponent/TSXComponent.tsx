import { random } from "@utils";
import "./TSXComponent.sass";

export const TSXComponent = () => {
    const randomNumber = random(0, 100)

    return (
        <div class="TSXComponent" className="blue">TSX_Component {randomNumber}</div>
    )
}