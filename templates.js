!function(){var l=Handlebars.template,a=Handlebars.templates=Handlebars.templates||{};a["tmpl-add-form"]=l({compiler:[7,">= 4.0.0"],main:function(l,a,n,e,s){var t,o=null!=a?a:l.nullContext||{},r=n.helperMissing,i=l.escapeExpression;return'\n  <div id="dropzone" class="center"><form action="/api/upload" class="dropzone needsclick" id="geo-upload">\n\n  <div class="dz-message needsclick center">\n    <strong>Drop zip files here or click to upload.</strong><br />\n  </div>\n</form></div>\n        <h3> Example Add Task </h3>\n        <form id="addTaskForm" class="form-stacked">\n            <fieldset>\n            <div class="col-md-4">\n\t\t<div class="form-group">\n                    <label for="x"> x </label>\n                    <input type="x" name="x" class="form-control input-sm" id="x" value='+i((t=null!=(t=n.x||(null!=a?a.x:a))?t:r,"function"==typeof t?t.call(o,{name:"x",hash:{},data:s}):t))+'>\n                </div>\n                <div class="form-group">\n                    <label for="y"> y </label>\n                    <input type="y" name="y" class="form-control input-sm" id="y" value='+i((t=null!=(t=n.y||(null!=a?a.y:a))?t:r,"function"==typeof t?t.call(o,{name:"y",hash:{},data:s}):t))+'>\n                </div>\n                <button id="addTask" class="btn btn-info-outline btn-success" type="button">Add Task</button>\n            </div>\n            </fieldset>\n        </form>\n        <div class="col-md-4"><pre id="task_result"></pre></div>\n'},useData:!0}),a["tmpl-tr"]=l({compiler:[7,">= 4.0.0"],main:function(l,a,n,e,s){var t,o=null!=a?a:l.nullContext||{},r=n.helperMissing,i=l.escapeExpression;return'<tr><td><a href="#" onclick="showResult(\''+i((t=null!=(t=n.result||(null!=a?a.result:a))?t:r,"function"==typeof t?t.call(o,{name:"result",hash:{},data:s}):t))+"');return false;\" >"+i((t=null!=(t=n.task_name||(null!=a?a.task_name:a))?t:r,"function"==typeof t?t.call(o,{name:"task_name",hash:{},data:s}):t))+"</a></td><td>"+i((t=null!=(t=n.timestamp||(null!=a?a.timestamp:a))?t:r,"function"==typeof t?t.call(o,{name:"timestamp",hash:{},data:s}):t))+"</td><td>"+i((n.json_metatags||a&&a.json_metatags||r).call(o,null!=a?a.tags:a,{name:"json_metatags",hash:{},data:s}))+"</td></tr>\n"},useData:!0}),a["tmpl-user"]=l({compiler:[7,">= 4.0.0"],main:function(l,a,n,e,s){var t,o=null!=a?a:l.nullContext||{},r=n.helperMissing,i="function",d=l.escapeExpression;return'      <h2>User Profile</h2>\n      <div id="user_profile">\n          <div id="photo" class="col-md-2" style="width:200px ">\n            <img src="'+d((t=null!=(t=n.gravator_url||(null!=a?a.gravator_url:a))?t:r,typeof t===i?t.call(o,{name:"gravator_url",hash:{},data:s}):t))+'?s=180&d=mm"><br><br>\n            <a href="https://en.gravatar.com/" target="_blank" style="clear:both;">Profile Image</a><br><br>\n            <a id="reset_password" style="clear:both;">Reset Password</a>\n          </div>\n          <form  id="view_form" class="form-horizontal col-md-4" onsubmit="return edit_user();">\n              <div class="form-group">\n                <label class="col-md-3 control-label">Username</label>\n                  <div class="col-md-09">\n                <p class="form-control-static">'+d((t=null!=(t=n.username||(null!=a?a.username:a))?t:r,typeof t===i?t.call(o,{name:"username",hash:{},data:s}):t))+'</p>\n                </div>\n            </div>\n             <div class="form-group">\n                  <label class="col-md-3 control-label">Name</label>\n                    <div class="col-md-09">\n                  <p class="form-control-static">'+d((t=null!=(t=n.name||(null!=a?a.name:a))?t:r,typeof t===i?t.call(o,{name:"name",hash:{},data:s}):t))+'</p>\n                  </div>\n            </div>\n              <div class="form-group">\n                <label class="col-md-3 control-label">Email</label>\n                  <div class="col-md-09">\n                    <p class="form-control-static">'+d((t=null!=(t=n.email||(null!=a?a.email:a))?t:r,typeof t===i?t.call(o,{name:"email",hash:{},data:s}):t))+'</p>\n                 </div>\n             </div>\n             <button type="submit" id="form_submit" class="btn btn-default pull-right" style="margin-right:40px;">Edit</button>\n         </form>\n          <form class="col-md-4" id="user_form" onsubmit="return submit_user();">\n              <div style="display:none">\n                  <input type="hidden" name="csrfmiddlewaretoken" value="'+d((t=null!=(t=n.csrftoken||(null!=a?a.csrftoken:a))?t:r,typeof t===i?t.call(o,{name:"csrftoken",hash:{},data:s}):t))+'"/>\n             </div>\n              <div class="form-group">\n                 <label for="first_name">First Name</label>\n                  <input type="text" class="form-control" name="first_name" placeholder="John" value="'+d((t=null!=(t=n.first_name||(null!=a?a.first_name:a))?t:r,typeof t===i?t.call(o,{name:"first_name",hash:{},data:s}):t))+'">\n             </div>\n              <div class="form-group">\n                   <label for="last_name">Last Name</label>\n                    <input type="text" class="form-control" name="last_name" placeholder="Doe" value="'+d((t=null!=(t=n.last_name||(null!=a?a.last_name:a))?t:r,typeof t===i?t.call(o,{name:"last_name",hash:{},data:s}):t))+'">\n               </div>\n              <div class="form-group">\n                 <label for="email">Email address</label>\n                  <input type="email" class="form-control" name="email" placeholder="Enter email" value="'+d((t=null!=(t=n.email||(null!=a?a.email:a))?t:r,typeof t===i?t.call(o,{name:"email",hash:{},data:s}):t))+'">\n             </div>\n             <button type="submit" id="form_submit" class="btn btn-default pull-right">Update</button>\n         </form>\n         <div class="row" style="width:100%;clear:both;"></div>\n          <form class="form-inline" id="pass_form" onsubmit="return set_password();" style="display:none">\n            <div style="display:none">\n                    <input type="hidden" name="csrfmiddlewaretoken" value="'+d((t=null!=(t=n.csrftoken||(null!=a?a.csrftoken:a))?t:r,typeof t===i?t.call(o,{name:"csrftoken",hash:{},data:s}):t))+'"/>\n           </div>\n            <div class="form-group">\n             <label for="password">New Password</label>\n              <input type="password" class="form-control" name="password" placeholder="New Password">\n           </div>\n            <div class="form-group">\n             <label for="password2">Retype New Password</label>\n              <input type="password" class="form-control" name="password2" placeholder="Retype New Password">\n           </div>\n           <button type="submit" class="btn btn-default">Set Password</button>\n         </form>\n     </div>\n'},useData:!0})}();
