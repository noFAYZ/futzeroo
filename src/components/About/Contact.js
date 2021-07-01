	
import React, { Component } from 'react'
import HubspotForm from 'react-hubspot-form'

            class Contact extends Component {
               render() {
                   return (
                    <article id="post-48536" className="post-48536 page type-page status-publish hentry">
  <div className="entry-content">
    <div id="et-boc" className="et-boc">
      <div className="et-l et-l--post">
        <div className="et_builder_inner_content et_pb_gutters3">
          <div className="et_pb_section et_pb_section_0 et_pb_with_background et_section_regular section_has_divider et_pb_bottom_divider">
            <div className="et_pb_row et_pb_row_0">
              <div className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
                <div className="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_center et_pb_bg_layout_light">
                  <div className="et_pb_text_inner"><h2><span className="yellow">Kontakteeru meiega</span></h2></div>
                </div>
              </div> 
            </div>
            <div className="et_pb_bottom_inside_divider et-no-transition" />
          </div> 
          <div className="et_pb_section et_pb_section_1 padding-override et_section_regular" >
            <div className="et_pb_row et_pb_row_1 reverse et_pb_equal_columns" >
              <div className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child" style={{paddingLeft: '170px', paddingRight: '170px'}}>
              


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
      </div>
    </div>
    <span className="et_bloom_bottom_trigger" />					</div>
</article>

            
                      )
                   }
               }
               
               export default Contact;        