import "./carrossel.css";

export function Carrossel(){

    function CItemDeCarrossel(){
        
        let CarrosselImagem = "Uma URL";
        let CarrosselTitulo = "Um título";
        let CarrosselLegenda = "Uma legenda";

        const carrossel = document.getElementById("carrossel")

        let novoItemCarrossel = document.createElement("div");
        novoItemCarrossel.append(CarrosselImagem);
        novoItemCarrossel.append(CarrosselTitulo);
        novoItemCarrossel.append(CarrosselLegenda);

        return (carrossel?.append(novoItemCarrossel))
    }

    return(
        <>
        <button onClick='CItemDeCarrossel()'></button>
        <section className="carrossel" id="carrossel">
        </section>
        </>
    );
}