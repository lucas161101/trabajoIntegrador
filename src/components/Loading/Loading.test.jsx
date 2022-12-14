import { render } from "@testing-library/react";
import Loading from "./Loading";

describe('<Loading />', () => {
    test('Se debe renderizar el componente', () => {
        const component = render(<Loading />);
        expect(component.container).toBeInTheDocument();
    })
})