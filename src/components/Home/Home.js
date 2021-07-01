import React, { Component } from 'react'
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';


class Home extends Component {
    render() {
        return (
            <article id="post-47822" className="post-47822 page type-page status-publish hentry">

                <div className="entry-content">
                    <div id="et-boc" className="et-boc">
                        <div className="et-l et-l--post">
                            <div className="et_builder_inner_content et_pb_gutters3">

                                <Section1/>

                                <Section2/>

                                <Section3/>

                                <Section4/>

                                <Section5/>

                                <Section6/>

                                <Section7/>

                            </div>

                        </div>

                </div>

            <span className="et_bloom_bottom_trigger"></span>					
            </div>


            </article>
            )
    }
}

export default Home;
