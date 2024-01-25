import { useState, useEffect } from "react";
import { AreaMedias, BoxChurnRateArea, BoxGraphArea, BoxGraphAreaGraph, BoxGraphButtonArea, BoxGraphButtonAreaMonths, BoxTotalMRR, BoxTotalMRR_And_BoxGraphArea, ButtonMonth, ButtonYear, HeaderArea, PageContainer, PageHeader, PageView, ReturnArea, TitleBox } from "./Metrics.style";
import { apiGetChurnRateFromYearAndMonth, apiGetRevenueFromYear, apiGetRevenueFromYearAndMonth, apiGetChurnRateFromYear, apiGetChurnRateAllMonthsFromYear } from "../../services/apiManager";
import { formatarValorMonetario } from "../../utils/dataFormat";
import { Chart as ChartJS} from 'chart.js/auto';
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { Link } from 'react-router-dom';
import returnIcon from "../../assets/return-button-icon.svg"
import { Loading } from "../../components/loading/Loading";
import { theme } from "../../theme.js";

export function Metrics () {
    
    const [loading, setLoading] = useState(false);
    const [loadMessage, setLoadMessage] = useState('');

    const [totalRevenueYear, setTotalRevenueYear] = useState(0);
    const [churnRateYear, setChurnRateYear] = useState(0.0);
    const [activeSubscribersAtYear, setActiveSubscribersAtYear] = useState(1);
    const [canceledSubscribersAtYear, setCanceledSubscribersAtYear] = useState(1);
    const [churnRateMonth, setChurRateMonth] = useState(0);
    const [activeSubscribers, setActiveSubscribers] = useState(1);
    const [canceledSubscribers, setCanceledSubscribers] = useState(1);
    const [currentYear, setCurrentYear] = useState(0);
    const [currentMonth, setCurrentMonth] = useState(1);
    const [janRevenue, setJanRevenue] = useState(0.0);
    const [fevRevenue, setFevRevenue] = useState(0.0);
    const [marRevenue, setMarRevenue] = useState(0.0);
    const [abrRevenue, setAbrRevenue] = useState(0.0);
    const [maiRevenue, setMaiRevenue] = useState(0.0);
    const [junRevenue, setJunRevenue] = useState(0.0);
    const [julRevenue, setJulRevenue] = useState(0.0);
    const [agoRevenue, setAgoRevenue] = useState(0.0);
    const [setRevenue, setSetRevenue] = useState(0.0);
    const [outRevenue, setOutRevenue] = useState(0.0);
    const [novRevenue, setNovRevenue] = useState(0.0);
    const [dezRevenue, setDezRevenue] = useState(0.0);

    const [allChurnRatesOfYear, setAllChurnRatesOfYear] = useState([]);

    const handleYear = (year) => {
        setCurrentYear(year);
    }

    useEffect(() => {
        if (currentYear > 0){
            const call = async () =>{
                setLoading(true);
                setLoadMessage('Calculando renda para ' + currentYear);

                let response = await apiGetRevenueFromYear(currentYear);
                setTotalRevenueYear(response);

                response = await apiGetChurnRateFromYear(currentYear);
                setChurnRateYear(response.churnRate);
                setActiveSubscribersAtYear(response.numeroAssinantesInicial);
                setCanceledSubscribersAtYear(response.numeroCancelamentos);

                response = await apiGetChurnRateAllMonthsFromYear(currentYear);
                setAllChurnRatesOfYear(response);

                setLoading(false);

                response = await apiGetRevenueFromYearAndMonth({year: currentYear, month: 1})
                setJanRevenue(response);

                response = await apiGetRevenueFromYearAndMonth({year: currentYear, month: 2})
                setFevRevenue(response);

                response = await apiGetRevenueFromYearAndMonth({year: currentYear, month: 3})
                setMarRevenue(response);

                response = await apiGetRevenueFromYearAndMonth({year: currentYear, month: 4})
                setAbrRevenue(response);

                response = await apiGetRevenueFromYearAndMonth({year: currentYear, month: 5})
                setMaiRevenue(response);

                response = await apiGetRevenueFromYearAndMonth({year: currentYear, month: 6})
                setJunRevenue(response);

                response = await apiGetRevenueFromYearAndMonth({year: currentYear, month: 7})
                setJulRevenue(response);

                response = await apiGetRevenueFromYearAndMonth({year: currentYear, month: 8})
                setAgoRevenue(response);

                response = await apiGetRevenueFromYearAndMonth({year: currentYear, month: 9})
                setSetRevenue(response);

                response = await apiGetRevenueFromYearAndMonth({year: currentYear, month: 10})
                setOutRevenue(response);

                response = await apiGetRevenueFromYearAndMonth({year: currentYear, month: 11})
                setNovRevenue(response);

                response = await apiGetRevenueFromYearAndMonth({year: currentYear, month: 12})
                setDezRevenue(response);

                response = await apiGetChurnRateFromYearAndMonth({year: currentYear, month: 1});

                setChurRateMonth(response.churnRate);
                setActiveSubscribers(response.numeroAssinantesInicial);
                setCanceledSubscribers(response.numeroCancelamentos);
            }
            call();

        }
    }, [currentYear]);

    useEffect(() => {
        const call = async () =>{
            setLoading(true);
            setLoadMessage('Calculando taxa de cancelamento');

            const response = await apiGetChurnRateFromYearAndMonth({year: currentYear, month: currentMonth});

            setChurRateMonth(response.churnRate);
            setActiveSubscribers(response.numeroAssinantesInicial);
            setCanceledSubscribers(response.numeroCancelamentos);

            setLoading(false);
        }
        
        call();

    }, [currentMonth]);

    return(
        <PageContainer>

            {
                loading ? (<Loading label={loadMessage} />) : null
            }

            <PageHeader>
                <ReturnArea>
                    <Link to="/home">
                        <button><img src={returnIcon} /></button>
                    </Link>
                </ReturnArea>
                <HeaderArea>
                    <h1>MRR (monthly recurring revenue)</h1>
                </HeaderArea>
            </PageHeader>
            <PageView>
                <BoxTotalMRR_And_BoxGraphArea>
                    <BoxTotalMRR>
                        <TitleBox>Médias anuais</TitleBox>
                        <AreaMedias>
                            <TitleBox>Receita total</TitleBox>
                            <p>R$ {formatarValorMonetario(totalRevenueYear ? totalRevenueYear : 0.0)}</p>
                            <TitleBox>Cancelamento</TitleBox>
                            <p>{formatarValorMonetario(churnRateYear ? churnRateYear : 0.0)}%</p>
                            <Line 
                                data={{
                                    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
                                    datasets: [
                                        {
                                            label: 'Ativos',
                                            data: allChurnRatesOfYear.map((churnRateData) => churnRateData.numeroAssinantesInicial - churnRateData.numeroCancelamentos),
                                            backgroundColor: theme.colors.green,
                                            borderColor: theme.colors.green,
                                        },
                                        {
                                            label: 'Cancelados',
                                            data: allChurnRatesOfYear.map((churnRateData) => churnRateData.numeroCancelamentos),
                                            backgroundColor: theme.colors.yellow,
                                            borderColor: theme.colors.yellow,
                                        }
                                        
                                    ]
                                }}
                            />
                            
                        </AreaMedias>
                        <a href="https://copybase.com.br/">
                            <img src="https://assets-global.website-files.com/6356e75722f218bac247e7c6/636180db578c477db8820169_logo-branco.svg" />
                        </a>
                    </BoxTotalMRR>
                    <BoxGraphArea>
                        <TitleBox>Renda mensal {`(${currentYear})`}</TitleBox>
                        <BoxGraphButtonArea>
                            <ButtonYear onClick={() => {handleYear(2020)}}>2020</ButtonYear>
                            <ButtonYear onClick={() => {handleYear(2021)}}>2021</ButtonYear>
                            <ButtonYear onClick={() => {handleYear(2022)}}>2022</ButtonYear>
                            <ButtonYear onClick={() => {handleYear(2023)}}>2023</ButtonYear>
                            <ButtonYear onClick={() => {handleYear(2024)}}>2024</ButtonYear>
                        </BoxGraphButtonArea>
                        <BoxGraphAreaGraph>
                            <Bar
                                data={{
                                    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
                                    datasets: [
                                        {
                                            label: "Renda",
                                            data: [
                                                janRevenue, fevRevenue, marRevenue, abrRevenue, maiRevenue, junRevenue,
                                                julRevenue, agoRevenue, setRevenue, outRevenue, novRevenue, dezRevenue
                                            ],
                                            backgroundColor: "#fff"
                                        }
                                        
                                    ],
                                    
                                }}
                            />
                        </BoxGraphAreaGraph>
                    </BoxGraphArea>
                        
                    <BoxChurnRateArea>
                        <TitleBox>Taxa de cancelamento {formatarValorMonetario(churnRateMonth ? churnRateMonth : 0.0)}%</TitleBox>
                        <BoxGraphButtonAreaMonths>
                            <ButtonMonth onClick={() => {setCurrentMonth(1)}}>Jan</ButtonMonth>
                            <ButtonMonth onClick={() => {setCurrentMonth(2)}}>Fev</ButtonMonth>
                            <ButtonMonth onClick={() => {setCurrentMonth(3)}}>Mar</ButtonMonth>
                            <ButtonMonth onClick={() => {setCurrentMonth(4)}}>Abr</ButtonMonth>
                            <ButtonMonth onClick={() => {setCurrentMonth(5)}}>Mai</ButtonMonth>
                            <ButtonMonth onClick={() => {setCurrentMonth(6)}}>Jun</ButtonMonth>
                            <ButtonMonth onClick={() => {setCurrentMonth(7)}}>Jul</ButtonMonth>
                            <ButtonMonth onClick={() => {setCurrentMonth(8)}}>Ago</ButtonMonth>
                            <ButtonMonth onClick={() => {setCurrentMonth(9)}}>Set</ButtonMonth>
                            <ButtonMonth onClick={() => {setCurrentMonth(10)}}>Out</ButtonMonth>
                            <ButtonMonth onClick={() => {setCurrentMonth(11)}}>Nov</ButtonMonth>
                            <ButtonMonth onClick={() => {setCurrentMonth(12)}}>Dez</ButtonMonth>
                        </BoxGraphButtonAreaMonths>
                        <BoxGraphAreaGraph>
                            <Doughnut
                                data={{
                                    labels: ["Ativo", "Cancelado",],
                                    datasets: [
                                        {
                                            label: "Total",
                                            borderRadius: 0,
                                            borderWidth: 0,
                                            data: [
                                                (activeSubscribers-canceledSubscribers), canceledSubscribers
                                            ],
                                            backgroundColor: [
                                                theme.colors.green,
                                                theme.colors.yellow
                                            ]
                                        }
                                    ],
                                    
                                }}
                            />
                        </BoxGraphAreaGraph>
                    </BoxChurnRateArea>

                </BoxTotalMRR_And_BoxGraphArea>
            </PageView>
        </PageContainer>
    );
}