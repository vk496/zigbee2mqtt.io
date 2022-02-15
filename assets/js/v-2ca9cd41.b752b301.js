"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[2265],{53791:(e,t,a)=>{a.r(t),a.d(t,{data:()=>o});const o={key:"v-2ca9cd41",path:"/devices/D1.html",title:"Ubisys D1 control via MQTT",lang:"en-US",frontmatter:{title:"Ubisys D1 control via MQTT",description:"Integrate your Ubisys D1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2021-10-30T12:58:50.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Configuring Inputs",slug:"configuring-inputs",children:[]},{level:3,title:"(Re-)Binding and/or Decoupling",slug:"re-binding-and-or-decoupling",children:[]},{level:3,title:"Ballast Configuration",slug:"ballast-configuration",children:[]},{level:3,title:"Dimmer strategy configuration",slug:"dimmer-strategy-configuration",children:[]}]},{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Light",slug:"light",children:[]},{level:3,title:"Power (numeric)",slug:"power-numeric",children:[]},{level:3,title:"Ballast_physical_minimum_level (numeric)",slug:"ballast-physical-minimum-level-numeric",children:[]},{level:3,title:"Ballast_physical_maximum_level (numeric)",slug:"ballast-physical-maximum-level-numeric",children:[]},{level:3,title:"Ballast_minimum_level (numeric)",slug:"ballast-minimum-level-numeric",children:[]},{level:3,title:"Ballast_maximum_level (numeric)",slug:"ballast-maximum-level-numeric",children:[]},{level:3,title:"Minimum_on_level (numeric)",slug:"minimum-on-level-numeric",children:[]},{level:3,title:"Capabilities_forward_phase_control (binary)",slug:"capabilities-forward-phase-control-binary",children:[]},{level:3,title:"Capabilities_reverse_phase_control (binary)",slug:"capabilities-reverse-phase-control-binary",children:[]},{level:3,title:"Capabilities_reactance_discriminator (binary)",slug:"capabilities-reactance-discriminator-binary",children:[]},{level:3,title:"Capabilities_configurable_curve (binary)",slug:"capabilities-configurable-curve-binary",children:[]},{level:3,title:"Capabilities_overload_detection (binary)",slug:"capabilities-overload-detection-binary",children:[]},{level:3,title:"Status_forward_phase_control (binary)",slug:"status-forward-phase-control-binary",children:[]},{level:3,title:"Status_reverse_phase_control (binary)",slug:"status-reverse-phase-control-binary",children:[]},{level:3,title:"Status_overload (binary)",slug:"status-overload-binary",children:[]},{level:3,title:"Status_capacitive_load (binary)",slug:"status-capacitive-load-binary",children:[]},{level:3,title:"Status_inductive_load (binary)",slug:"status-inductive-load-binary",children:[]},{level:3,title:"Mode_phase_control (enum)",slug:"mode-phase-control-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/D1.md",git:{updatedTime:1644940737e3}}},18199:(e,t,a)=>{a.r(t),a.d(t,{default:()=>T});var o=a(66252);const i=(0,o.uE)('<h1 id="ubisys-d1" tabindex="-1"><a class="header-anchor" href="#ubisys-d1" aria-hidden="true">#</a> Ubisys D1</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>D1</td></tr><tr><td>Vendor</td><td>Ubisys</td></tr><tr><td>Description</td><td>Universal dimmer D1</td></tr><tr><td>Exposes</td><td>light (state, brightness, level_config), power, ballast_physical_minimum_level, ballast_physical_maximum_level, ballast_minimum_level, ballast_maximum_level, minimum_on_level, capabilities_forward_phase_control, capabilities_reverse_phase_control, capabilities_reactance_discriminator, capabilities_configurable_curve, capabilities_overload_detection, status_forward_phase_control, status_reverse_phase_control, status_overload, status_capacitive_load, status_inductive_load, mode_phase_control, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/D1.jpg" alt="Ubisys D1"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="configuring-inputs" tabindex="-1"><a class="header-anchor" href="#configuring-inputs" aria-hidden="true">#</a> Configuring Inputs</h3>',4),s=(0,o.Uk)("In case the inputs need to be reconfigured (e.g. to use stationary switches instead of momentary ones or vice versa) this can be done in the same way as "),l=(0,o.Uk)("it is being done for the ubisys C4"),n=(0,o.Uk)("."),c=(0,o._)("h3",{id:"re-binding-and-or-decoupling",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#re-binding-and-or-decoupling","aria-hidden":"true"},"#"),(0,o.Uk)(" (Re-)Binding and/or Decoupling")],-1),d=(0,o.Uk)("Also see "),r=(0,o.Uk)("the ubisys C4 documentation"),u=(0,o.Uk)(", example use cases:"),p=(0,o.uE)('<ul><li>Use the second input to control a different ZigBee device.</li><li>Completely decouple the input(s) from the local load.</li></ul><h3 id="ballast-configuration" tabindex="-1"><a class="header-anchor" href="#ballast-configuration" aria-hidden="true">#</a> Ballast Configuration</h3><p>By publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> the dimmer&#39;s ballast configuration attributes (<code>min_level</code> and <code>max_level</code>) can be set. Example:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;ballast_config&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;min_level&quot;</span><span class="token operator">:</span> <span class="token number">3</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>By publishing to <code>zigbee2mqtt/FRIENDLY_NAME/get/ballast_config</code> the values of the ballast configuration attributes can also be read back from the device and be printed to the normal Zigbee2MQTT log (flagged as warnings but only to make sure they do not get suppressed). To account for errors due to missing optional attributes (since this is a general function), every cluster attribute will be queried separately and the complete process can therefore take a moment.</p><h3 id="dimmer-strategy-configuration" tabindex="-1"><a class="header-anchor" href="#dimmer-strategy-configuration" aria-hidden="true">#</a> Dimmer strategy configuration</h3><p>The dimmer phase control mode can be changed by publishing <code>{ &quot;mode_phase_control&quot;: &quot;MODE&quot; }</code> to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> where <code>MODE</code> is one of the following values: <code>automatic</code> (default), <code>forward</code> or <code>reverse</code>.</p><p>A word of caution is in order: configuring the wrong dimmer phase control mode could destroy the device or the attached load!</p>',8),h=(0,o.Uk)("More information can be found in the "),m={href:"https://www.smarthome-store.de/media/documents/ubisys-d1-technical-reference.pdf",target:"_blank",rel:"noopener noreferrer"},b=(0,o.Uk)("ubisys D1 technical reference manual"),_=(0,o.Uk)(', chapter "7.2.8. Dimmer Setup Cluster (Server)".'),g=(0,o._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,o.Uk)(" OTA updates")],-1),v=(0,o.Uk)("This device supports OTA updates, for more information see "),f=(0,o.Uk)("OTA updates"),q=(0,o.Uk)("."),y=(0,o._)("h2",{id:"options",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,o.Uk)(" Options")],-1),w=(0,o.Uk)("How to use device type specific configuration"),E=(0,o.uE)('<ul><li><p><code>transition</code>: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to <code>0</code> (no transition). The value must be a number with a minimum value of <code>0</code></p></li><li><p><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. Example:</p></li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span>\n  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span>\n  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="light" tabindex="-1"><a class="header-anchor" href="#light" aria-hidden="true">#</a> Light</h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>, <code>level_config</code>.</p><ul><li><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</li><li><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness&quot;: &quot;&quot;}</code>.</li></ul><h4 id="transition" tabindex="-1"><a class="header-anchor" href="#transition" aria-hidden="true">#</a> Transition</h4><p>For all of the above mentioned features it is possible to do a transition of the value over time. To do this add an additional property <code>transition</code> to the payload which is the transition time in seconds. Examples: <code>{&quot;brightness&quot;:156,&quot;transition&quot;:3}</code>, <code>{&quot;color_temp&quot;:241,&quot;transition&quot;:1}</code>.</p><h4 id="moving-stepping" tabindex="-1"><a class="header-anchor" href="#moving-stepping" aria-hidden="true">#</a> Moving/stepping</h4><p>Instead of setting a value (e.g. brightness) directly it is also possible to:</p><ul><li>move: this will automatically move the value over time, to stop send value <code>stop</code> or <code>0</code>.</li><li>step: this will increment/decrement the current value by the given one.</li></ul><p>The direction of move and step can be either up or down, provide a negative value to move/step down, a positive value to move/step up. To do this send a payload like below to <code>zigbee2mqtt/FRIENDLY_NAME/set</code></p><p><strong>NOTE</strong>: brightness move/step will stop at the minimum brightness and won&#39;t turn on the light when it&#39;s off. In this case use <code>brightness_move_onoff</code>/<code>brightness_step_onoff</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n  <span class="token string">&quot;brightness_move&quot;</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token comment">// Starts moving brightness down at 40 units per second</span>\n  <span class="token string">&quot;brightness_move&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// Stop moving brightness</span>\n  <span class="token string">&quot;brightness_step&quot;</span><span class="token operator">:</span> <span class="token number">40</span> <span class="token comment">// Increases brightness by 40</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric" aria-hidden="true">#</a> Power (numeric)</h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="ballast-physical-minimum-level-numeric" tabindex="-1"><a class="header-anchor" href="#ballast-physical-minimum-level-numeric" aria-hidden="true">#</a> Ballast_physical_minimum_level (numeric)</h3><p>Specifies the minimum light output the ballast can achieve.. Value can be found in the published state on the <code>ballast_physical_minimum_level</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;ballast_physical_minimum_level&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;ballast_physical_minimum_level&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>254</code>.</p><h3 id="ballast-physical-maximum-level-numeric" tabindex="-1"><a class="header-anchor" href="#ballast-physical-maximum-level-numeric" aria-hidden="true">#</a> Ballast_physical_maximum_level (numeric)</h3><p>Specifies the maximum light output the ballast can achieve.. Value can be found in the published state on the <code>ballast_physical_maximum_level</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;ballast_physical_maximum_level&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;ballast_physical_maximum_level&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>254</code>.</p><h3 id="ballast-minimum-level-numeric" tabindex="-1"><a class="header-anchor" href="#ballast-minimum-level-numeric" aria-hidden="true">#</a> Ballast_minimum_level (numeric)</h3><p>Specifies the minimum light output of the ballast. Value can be found in the published state on the <code>ballast_minimum_level</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;ballast_minimum_level&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;ballast_minimum_level&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>254</code>.</p><h3 id="ballast-maximum-level-numeric" tabindex="-1"><a class="header-anchor" href="#ballast-maximum-level-numeric" aria-hidden="true">#</a> Ballast_maximum_level (numeric)</h3><p>Specifies the maximum light output of the ballast. Value can be found in the published state on the <code>ballast_maximum_level</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;ballast_maximum_level&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;ballast_maximum_level&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>254</code>.</p><h3 id="minimum-on-level-numeric" tabindex="-1"><a class="header-anchor" href="#minimum-on-level-numeric" aria-hidden="true">#</a> Minimum_on_level (numeric)</h3><p>Specifies the minimum light output after switching on. Value can be found in the published state on the <code>minimum_on_level</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;minimum_on_level&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;minimum_on_level&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>255</code>.</p><h3 id="capabilities-forward-phase-control-binary" tabindex="-1"><a class="header-anchor" href="#capabilities-forward-phase-control-binary" aria-hidden="true">#</a> Capabilities_forward_phase_control (binary)</h3><p>The dimmer supports AC forward phase control.. Value can be found in the published state on the <code>capabilities_forward_phase_control</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;capabilities_forward_phase_control&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;capabilities_forward_phase_control&quot;: NEW_VALUE}</code>. If value equals <code>true</code> capabilities_forward_phase_control is ON, if <code>false</code> OFF.</p><h3 id="capabilities-reverse-phase-control-binary" tabindex="-1"><a class="header-anchor" href="#capabilities-reverse-phase-control-binary" aria-hidden="true">#</a> Capabilities_reverse_phase_control (binary)</h3><p>The dimmer supports AC reverse phase control.. Value can be found in the published state on the <code>capabilities_reverse_phase_control</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;capabilities_reverse_phase_control&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;capabilities_reverse_phase_control&quot;: NEW_VALUE}</code>. If value equals <code>true</code> capabilities_reverse_phase_control is ON, if <code>false</code> OFF.</p><h3 id="capabilities-reactance-discriminator-binary" tabindex="-1"><a class="header-anchor" href="#capabilities-reactance-discriminator-binary" aria-hidden="true">#</a> Capabilities_reactance_discriminator (binary)</h3><p>The dimmer is capable of measuring the reactanceto distinguish inductive and capacitive loads.. Value can be found in the published state on the <code>capabilities_reactance_discriminator</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;capabilities_reactance_discriminator&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;capabilities_reactance_discriminator&quot;: NEW_VALUE}</code>. If value equals <code>true</code> capabilities_reactance_discriminator is ON, if <code>false</code> OFF.</p><h3 id="capabilities-configurable-curve-binary" tabindex="-1"><a class="header-anchor" href="#capabilities-configurable-curve-binary" aria-hidden="true">#</a> Capabilities_configurable_curve (binary)</h3><p>The dimmer is capable of replacing the built-in, default dimming curve.. Value can be found in the published state on the <code>capabilities_configurable_curve</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;capabilities_configurable_curve&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;capabilities_configurable_curve&quot;: NEW_VALUE}</code>. If value equals <code>true</code> capabilities_configurable_curve is ON, if <code>false</code> OFF.</p><h3 id="capabilities-overload-detection-binary" tabindex="-1"><a class="header-anchor" href="#capabilities-overload-detection-binary" aria-hidden="true">#</a> Capabilities_overload_detection (binary)</h3><p>The dimmer is capable of detecting an output overload and shutting the output off.. Value can be found in the published state on the <code>capabilities_overload_detection</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;capabilities_overload_detection&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;capabilities_overload_detection&quot;: NEW_VALUE}</code>. If value equals <code>true</code> capabilities_overload_detection is ON, if <code>false</code> OFF.</p><h3 id="status-forward-phase-control-binary" tabindex="-1"><a class="header-anchor" href="#status-forward-phase-control-binary" aria-hidden="true">#</a> Status_forward_phase_control (binary)</h3><p>The dimmer is currently operating in AC forward phase control mode.. Value can be found in the published state on the <code>status_forward_phase_control</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;status_forward_phase_control&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;status_forward_phase_control&quot;: NEW_VALUE}</code>. If value equals <code>true</code> status_forward_phase_control is ON, if <code>false</code> OFF.</p><h3 id="status-reverse-phase-control-binary" tabindex="-1"><a class="header-anchor" href="#status-reverse-phase-control-binary" aria-hidden="true">#</a> Status_reverse_phase_control (binary)</h3><p>The dimmer is currently operating in AC reverse phase control mode.. Value can be found in the published state on the <code>status_reverse_phase_control</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;status_reverse_phase_control&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;status_reverse_phase_control&quot;: NEW_VALUE}</code>. If value equals <code>true</code> status_reverse_phase_control is ON, if <code>false</code> OFF.</p><h3 id="status-overload-binary" tabindex="-1"><a class="header-anchor" href="#status-overload-binary" aria-hidden="true">#</a> Status_overload (binary)</h3><p>The output is currently turned off, because the dimmer has detected an overload.. Value can be found in the published state on the <code>status_overload</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;status_overload&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;status_overload&quot;: NEW_VALUE}</code>. If value equals <code>true</code> status_overload is ON, if <code>false</code> OFF.</p><h3 id="status-capacitive-load-binary" tabindex="-1"><a class="header-anchor" href="#status-capacitive-load-binary" aria-hidden="true">#</a> Status_capacitive_load (binary)</h3><p>The dimmer&#39;s reactance discriminator had detected a capacitive load.. Value can be found in the published state on the <code>status_capacitive_load</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;status_capacitive_load&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;status_capacitive_load&quot;: NEW_VALUE}</code>. If value equals <code>true</code> status_capacitive_load is ON, if <code>false</code> OFF.</p><h3 id="status-inductive-load-binary" tabindex="-1"><a class="header-anchor" href="#status-inductive-load-binary" aria-hidden="true">#</a> Status_inductive_load (binary)</h3><p>The dimmer&#39;s reactance discriminator had detected an inductive load.. Value can be found in the published state on the <code>status_inductive_load</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;status_inductive_load&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;status_inductive_load&quot;: NEW_VALUE}</code>. If value equals <code>true</code> status_inductive_load is ON, if <code>false</code> OFF.</p><h3 id="mode-phase-control-enum" tabindex="-1"><a class="header-anchor" href="#mode-phase-control-enum" aria-hidden="true">#</a> Mode_phase_control (enum)</h3><p>Configures the dimming technique.. Value can be found in the published state on the <code>mode_phase_control</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;mode_phase_control&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;mode_phase_control&quot;: NEW_VALUE}</code>. The possible values are: <code>automatic</code>, <code>forward</code>, <code>reverse</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',50),N={},T=(0,a(83744).Z)(N,[["render",function(e,t){const a=(0,o.up)("RouterLink"),N=(0,o.up)("OutboundLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[i,(0,o._)("p",null,[s,(0,o.Wm)(a,{to:"/devices/C4.html#configuring-inputs"},{default:(0,o.w5)((()=>[l])),_:1}),n]),c,(0,o._)("p",null,[d,(0,o.Wm)(a,{to:"/devices/C4.html#binding"},{default:(0,o.w5)((()=>[r])),_:1}),u]),p,(0,o._)("p",null,[h,(0,o._)("a",m,[b,(0,o.Wm)(N)]),_]),g,(0,o._)("p",null,[v,(0,o.Wm)(a,{to:"/guide/usage/ota_updates.html"},{default:(0,o.w5)((()=>[f])),_:1}),q]),y,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(a,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[w])),_:1})])]),E],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,o]of t)e[a]=o;return e}}}]);