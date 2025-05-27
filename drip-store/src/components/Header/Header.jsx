import { Button } from '../../Button/Button';
import {Logo} from '../Logo/Logo'
import './Header.css'

export const Header = () => {
    return (
        <header id="header">
            <div className='box-header'>
                <div className='box-header-children'>
                    <Logo margin={'.5rem 0 0 0.25rem'}/>
                </div>
                <Button
                widht={'7.125rem'}
                height={'2.5rem'}
                >Entrar</Button>
            </div>
        </header>
    );
}