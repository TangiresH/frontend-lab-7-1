import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <div className="content-box">
                <div className="hobby">
                    <h2>Хоббі:</h2>
                    <ul>
                        <li>Сноубординг</li>
                        <li>Волейбол</li>
                        <li>Риболовля</li>
                        <li>Футбол</li>
                    </ul>
                </div>

                <div className="favorite-movies">
                    <h2>Улюблені фільми:</h2>
                    <ol>
                        <li>"Найкращий стрілець", 1986</li>
                        <li>"Форсаж", 2001</li>
                        <li>"Вовк з Уолл-стріт", 2013</li>
                    </ol>
                </div>

                <div className="description">
                    <p>Флоренція — це крапля витонченої краси, вирізана в самому серці Тоскани. Це місто, де кожен куток
                        та камінь
                        пронизані історією і мистецтвом.</p>
                    <p>Вас вітають вулички, де кожен крок навіює відчуття подорожі у минуле.
                        Величні собори, які вишколилися у високому небі, говорять про долі століть і витончений смак
                        митців, що вбирали в
                        каміння свої мрії. Найвідоміший з них - Кафедральний собор Санта-Марія-дель-Фьоре, чиєму
                        будівництву
                        понад 1400 років, але його мармурова горгоня, освітлена сонячними променями, залишається
                        символом величі Ренесансу.</p>
                    <p>Флоренція - це місто для справжніх гурманів. Від виноробних ресторанів до місцевих олівців і
                        крамниць м'яса,
                        вирубаних в старовинних кам'яницях, місто пропонує найкращу італійську кухню. Ви не можете
                        пропустити шанс
                        спробувати аутентичну флорентійську стейк - бистро готують його як справжніх майстрів.</p>
                    <p>Флоренція живе за ритмом мистецтва. Від шедеврів Ренесансу, включаючи "Давида" Мікеланджело і
                        "Багатства Медичі" в
                        Галереї Уфіцці, до сучасних галерей і виставкових просторів, місто завжди створює магію
                        витонченого мистецтва.
                        А коли сонце сховається за обрієм, Флоренція розцвічує в нічний магічний світло, і ви можете
                        прогулятися вуличками,
                        освітленими ліхтарями, або насолодитися чарівною атмосферою одного з численних кафе та
                        барів.</p>
                    <p>Флоренція - це місто, яке вражає та чарує кожного, хто має щастя відвідати його, і воно завжди
                        готове розкрити свою
                        неперевершену красу перед вашими очима.</p>
                </div>
            </div>
        );
    }
}

export default Content;
