import Image from "next/image";
import styles from "./page.module.css";
"use client"
import {useEffect, useState, FormEvent} from "react"
import {supabase} from ".././crm/lib/supabase"
import toast, {Toaster} from "react-hot-toast";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css"
import { Lead } from "./lib/interface";
import { Cabecalho } from "./cabecalho";



export default function Home() {


  //---------------------------------------------------------
  //este bloco cria variáveis e arrays

  const [lead, setLead] = useState<Lead[]>([])

  const [form, setForm] = useState<Lead>({
    campanha:"",
    nome:"",
    idade:"",
    email:"",
    telefone:""
  })

  const[editId, setEditId] = useState<string | null>(null)

  useEffect( ()=> {
    fetchLeads()
  }, [])


  //---------------------------------------------------------
  //este bloco trata o envio do formulário

  async function TratarFormulario(event: FormEvent<HTMLFormElement>){
    event.preventDefault()
    console.log(form)

    if (editId){

      const {error} = await supabase.from<Lead>("leads").update([form]).eq("id", editId)

      if (error){
        toast.error("Falha ao guardar os dados na tabela")
      }else{
        toast.success("Dados atualizados com sucesso")
        fetchLeads()
      }

    }else{
      const {error} =  await supabase.from<Lead>("leads").insert([form])

      if (error){
        toast.error(`Não foi possível cadastrar ${error.message}`)
      } else {
        toast.success("Registrado com sucesso!")
      }

      fetchLeads()

      setForm({
        campanha:"",
        nome:"",
        idade:"",
        email:"",
        telefone:""
      })
    }
  }

  
  //---------------------------------------------------------
  //este bloco carrega informações do banco

  async function fetchLeads(){
    const{data, error} = await supabase.from("leads").select("*")

    if (error){
      toast.error(`Não foi possível carregar, ${error.message}`)
    }else{
      console.log(data)
      setLead(data || [])
    }
  }

  //---------------------------------------------------------
  //este bloco edita e exclui leads

  function converterLead(id: string){
  }

  function editarLead(lead: Lead){

    setForm(lead)
    if (lead.id){
      setEditId(lead.id)
    }

  }

  async function excluirLead(id: string){

    const janelaAlerta = await Swal.fire({
      title:"Você tem certeza que gostaria de excluir esta lead?",
      text: "Esta ação não pode ser desfeita",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim"
    })

    if (janelaAlerta.isConfirmed){
      const {error} = await supabase.from<Lead>("leads").delete().eq("id", id)

      if(error){
        toast.error("Não foi possível apagar a entrada")
      } else{
        toast.success("Apagado com sucesso")
        fetchLeads()
      }
    }
  }


  //---------------------------------------------------------
  //página do usuário

  return (
    <>
    <Cabecalho></Cabecalho>
      <h1>Registrar nova lead</h1>

      <Toaster />

      <form onSubmit={TratarFormulario}>
        <label>Campanha</label>
          <input type="text" value={form.campanha} onChange={ (event) => setForm({...form, campanha: event.target.value})}/>

        <label>Nome</label>
          <input type="text" value={form.nome} onChange={ (event) => setForm({...form, nome: event.target.value})}/>

        <label>Idade</label>
          <input type="text" value={form.idade} onChange={ (event) => setForm({...form, idade: event.target.value})}/>

        <label>E-mail</label>
          <input type="email" value={form.email} onChange={ (event) => setForm({...form, email: event.target.value})}/>

        <label>Telefone</label>
          <input type="text" value={form.telefone} onChange={ (event) => setForm({...form, telefone: event.target.value})}/>
        
        <button>{editId? "Salvar" : "Registrar"}</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Campanha</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Email</th>
            <th>Telefone</th>
          </tr>
        </thead>
        {lead.map((umaLead) => (
          <tr key={umaLead.id}>
            <td>{umaLead.campanha}</td>
            <td>{umaLead.nome}</td>
            <td>{umaLead.idade}</td>
            <td>{umaLead.email}</td>
            <td>{umaLead.telefone}</td>
            <button onClick={() => editarLead(umaLead)}>Editar</button>
            <button onClick={() => umaLead.id && excluirLead(umaLead.id)}>Excluir</button>
          </tr>
        ))}
      </table>
    </>
  );
}
