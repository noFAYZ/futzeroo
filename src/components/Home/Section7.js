import React, { Component } from 'react'
import HubspotForm from 'react-hubspot-form'


 class Section7 extends Component {
    render() {
        return (

<div className="et_pb_section et_pb_section_12 et_pb_with_background et_section_regular" >




<div id="get-started-form" className="et_pb_row et_pb_row_32">
<div className="et_pb_column et_pb_column_4_4 et_pb_column_50  et_pb_css_mix_blend_mode_passthrough">


<div style={{padding: '60px'}} id="contact-form" className="et_pb_module et_pb_text et_pb_text_35  et_pb_text_align_left et_pb_bg_layout_light">


<div className="et_pb_text_inner" >
    <h2 style={{textAlign: 'center'}}>Võta meiega ühendust!</h2>
</div>
</div>

<div className="et_pb_module et_pb_code et_pb_code_0">
<HubspotForm
   portalId='19896143'
   formId='bf8e332f-6b63-4c78-9e4e-ba215a5be78c'
   onSubmit={() => console.log('Submit!')}
   onReady={(form) => console.log('Form ready!')}
   loading={<div>Loading...</div>}
   />



</div>
</div>


</div>

</div>

            )
        }
    }
    
    export default Section7;