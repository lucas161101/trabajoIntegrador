import { Experimental_CssVarsProvider } from '@mui/material';
import {fireEvent, render, waitFor} from '@testing-library/react'
import Buscador from './Buscador';

const onBuscar = jest.fn();

const renderBuscador = () => {
    const component = render(<Buscador onBuscar={onBuscar} />);
    return component;
}

describe('<Buscador />', () => {
    test('Se debe renderizar el componente', () => {
        const component = renderBuscador();
        expect(component.container).toBeInTheDocument();
    })

    test('No se debe llamar a onBuscar cuando el usuario hace click y el contenido es < a 3 caracteres', async () => {
        const component = renderBuscador();
        const button = component.getByRole('button');
        //component.debug();
        fireEvent.click(button);
        expect(onBuscar).not.toBeCalled();

    });
    
    test('se debe llamar a onBuscar cuando el usuario hace click con el parametro requerido', async () => {
        const component = renderBuscador();
        const button = component.getByRole('button');
        const input = component.getByRole('searchbox').querySelector('input');
        //component.debug()
        fireEvent.change(input, {target: {value: 'test'}});   
        fireEvent.click(button);

        waitFor(() => {
            expect(onBuscar).toBeCalledWith('test');
        })


    });
});  