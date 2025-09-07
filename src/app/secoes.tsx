import './front.css';

export function SecaoHomePositivo({children}){
    return(
        <section className='positivo'>
            <section className='secao-envelope'>
                {children}
            </section>
        </section>
    );
}

export function SecaoHomeNegativo({children}){
    return(
        <section className='negativo'>
            <section className='secao-envelope'>
                {children}
            </section>
        </section>
    );
}