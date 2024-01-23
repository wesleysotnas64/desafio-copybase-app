import { useState, useEffect } from "react";
import { ButtonMetricsView, ChargeInput, ChrageButtomDetail, PageContainer, PageFooter, PageHeader, PageInfo, PageView, TableComponent, TableView } from "./Home.style"
import Papa from 'papaparse'
import { icons } from "../../icons"
import { apiPost } from "../../services/apiManager"
import { convertStringToDate, removeDuplicatesById } from "../../utils/dataFormat";
import { Loading } from "../../components/loading/Loading";

export function Home () {

    const [data, setData] = useState([]);
    const [shippingData, setShippingData] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleFileUpdate = (e) =>{
        const file = e.target.files[0];
        Papa.parse(file, {
            header: true,
            complete: (results) => {
                setData(results.data);
            },
        });
    };

    const handleShippingData = async () => {
        setLoading(true);

        try {
            await apiPost(shippingData)
                .then((response) => {
                    // Faça algo com a resposta se necessário
                    console.log('Resposta da API:', response);
                })
                .catch((error) => {
                    console.error('Erro ao processar resposta da API:', error);
                });
    
            console.log('Dados enviados com sucesso!');
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
        }

        setLoading(false);
    }

    const adjustingShippingData = () => {
        
        const assinantes = data.map((row) => ({
            quantidade_cobrancas: parseInt(row['quantidade cobranças'], 10),
            cobrada_a_cada_dias: parseInt(row['cobrada a cada X dias'], 10),
            data_inicio: convertStringToDate(row['data início']),
            status: row['status'],
            data_status: convertStringToDate(row['data status']),
            data_cancelamento: convertStringToDate(row['data cancelamento']),
            valor: parseFloat(row['valor'].replace(',', '.')),
            proximo_ciclo: convertStringToDate(row['próximo ciclo']),
            id_assinante: row['ID assinante'],
        }));

        setShippingData(removeDuplicatesById(assinantes));
    }

    useEffect(() => {
        if (shippingData.length > 0)
        {
            handleShippingData();
        }
        
    }, [shippingData]);

    return (
        
        <PageContainer>

            {
                loading ?
                (
                    <Loading />
                ):null
            }

            <PageHeader>
                <a href="https://copybase.com.br/">
                    <img src="https://assets-global.website-files.com/6356e75722f218bac247e7c6/636180db578c477db8820169_logo-branco.svg" />
                </a>
                Desafio desenvolvedor Full-Stack
            </PageHeader>

            <PageView>
                <PageInfo>
                    Ferramenta para visualizar métricas chave de negócios: <br />Monthly Recurring Revenue (MRR) e Churn Rate
                </PageInfo>
                <ChargeInput
                    type="file"
                    accept=".csv"
                    onChange={handleFileUpdate}
                />
                <ChrageButtomDetail>Formato: .csv</ChrageButtomDetail>
                <TableView>
                    {
                        data.length ? 
                        (

                            <TableComponent>
                                <thead>
                                    <tr>
                                        <th>QTD Cobranças</th>
                                        <th>Cobrada a cada X dias</th>
                                        <th>Data início</th>
                                        <th>Status</th>
                                        <th>Data status</th>
                                        <th>Data cancelamento</th>
                                        <th>Valor</th>
                                        <th>Próximo ciclo</th>
                                        <th>ID assinante</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((row, index) => (
                                            <tr key={index}>
                                                <td>{row['quantidade cobranças']}</td>
                                                <td>{row['cobrada a cada X dias']}</td>
                                                <td>{row['data início']}</td>
                                                <td>{row['status']}</td>
                                                <td>{row['data status']}</td>
                                                <td>{row['data cancelamento']}</td>
                                                <td>{row['valor']}</td>
                                                <td>{row['próximo ciclo']}</td>
                                                <td>{row['ID assinante']}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>

                            </TableComponent>
                        ) : null
                    }

                </TableView>
                {
                    data.length ? (
                        <ButtonMetricsView
                            onClick={adjustingShippingData}
                        >
                            Visualizar métricas
                        </ButtonMetricsView>
                    ) : null
                }
            </PageView>
            <PageFooter>
                <p>
                    Desenvolvido por: <b>Wesley Santos</b>
                </p>
                <a href="https://www.linkedin.com/in/wesley-santos-08b83b229/">
                    <img src={icons.linkedIn}/>
                </a>
                <a href="https://github.com/wesleysotnas64">
                    <img src={icons.gitHub} />
                </a>
            </PageFooter>
        </PageContainer>
        
    );
}