import React from 'react';
import '../Styles/NewYearStyles.css';

const NewYearWelcome = () => {
    return (
        <>
            <div class="feliz">Happy new year</div>
            <div class="ano_novo">
                <span>202</span>
                <span class="seis">3</span>
                <span class="sete">4</span>
                <div class="balao"></div>
            </div>
            <div class="fogos">
                <div class="f1">
                    <span><i></i></span>
                    <span><i></i></span>
                    <span><i></i></span>
                </div>
                <div class="f2">
                    <span><i></i></span>
                    <span><i></i></span>
                    <span><i></i></span>
                </div>
                <div class="f3">
                    <span><i></i></span>
                    <span><i></i></span>
                    <span><i></i></span>
                </div>
                <div class="f4">
                    <span><i></i></span>
                    <span><i></i></span>
                    <span><i></i></span>
                </div>
            </div>
        </>
    )
}
export default NewYearWelcome;