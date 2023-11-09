"use strict";(self.webpackChunkMeuBilhete_NewSite=self.webpackChunkMeuBilhete_NewSite||[]).push([[740],{9740:(te,h,r)=>{r.r(h),r.d(h,{MySellsModule:()=>K});var d=r(9808),Z=r(3287),e=r(5e3),A=r(4004),C=r(2467),S=r(2313),p=r(520),f=r(2340),x=r(7556);let q=(()=>{class n{constructor(t,i){this.httpClient=t,this.authService=i,this.apiUrl=f.N.apiUrl}getTickets(t){let i=new p.WM;return i=i.set("token-recaptcha",t),this.httpClient.get(`${this.apiUrl}/customer/tickets/${this.authService.getCustomer().doc}/${this.authService.getCustomer().email}`,{headers:i})}getComissionHistory(t){let i=new p.WM;return i=i.set("token-recaptcha",t),this.httpClient.get(`${this.apiUrl}/customer/comission/history`,{headers:i})}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(p.eN),e.LFG(x.e))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),k=(()=>{class n{constructor(t,i,o,c){this.pdvRepository=t,this.sanitizer=i,this.comissionerRepository=o,this.authService=c}getTickets(t){return this.comissionerRepository.getTickets(t).pipe((0,A.U)(i=>{var o;const c=[];return null===(o=i.events)||void 0===o||o.forEach(u=>{u.orders.forEach(a=>{const m=[];a.tickets.forEach(l=>{const y=m.findIndex(ee=>ee.id===l.ticketId);this.authService.getCustomer().comissionerId==l.customerComissionerId&&(-1===y?m.push({id:l.ticketId,name:l.ticket.name,sector:l.sector.name,customerComissionerId:l.customerComissionerId,customerId:l.customerId,customer:l.customer,fee:l.priceFinalFee,price:l.priceFinal-l.priceFinalFee,qty:1}):m[y].qty++,c.push({id:a.id,eventId:u.id,eventName:u.name,image:u.imageWeb,code:a.autoincrement,createdAt:a.createdAt,status:a.status,quantityTickets:a.tickets.length,amount:a.amount,link:a.link,holder:a.holder,canRefund:a.canRefund,tickets:m}))})})}),c}))}getComissionHistory(t){return this.comissionerRepository.getComissionHistory(t)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(C.D),e.LFG(S.H7),e.LFG(q),e.LFG(x.e))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var g=r(3290),v=r(8827),M=r(7862),_=r(6770);const U=["modalTickets"],b=["eventName"],F=["eventDate"],O=["ticketsEve"];function I(n,s){1&n&&(e.TgZ(0,"span"),e._uU(1,"s"),e.qZA())}function R(n,s){if(1&n&&(e.TgZ(0,"a",23),e._UZ(1,"i",24),e._uU(2," Vouchers"),e.qZA()),2&n){const t=e.oxw().$implicit;e.Q6J("href",t.link,e.LSH)}}function N(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div",7,8),e.TgZ(2,"div",9),e.TgZ(3,"div",10),e.TgZ(4,"div",11),e.TgZ(5,"h5",12,13),e._uU(7),e.qZA(),e.TgZ(8,"span"),e._uU(9),e.qZA(),e.qZA(),e.TgZ(10,"div",14),e.TgZ(11,"h6",15),e._uU(12),e.qZA(),e.TgZ(13,"p",16,17),e._uU(15),e.ALo(16,"date"),e._UZ(17,"br"),e._uU(18),e.ALo(19,"date"),e.qZA(),e.TgZ(20,"button",18),e.NdJ("click",function(){const c=e.CHM(t).$implicit;return e.oxw(2).viewTickets(c)}),e._UZ(21,"i",19),e._uU(22),e.YNc(23,I,2,0,"span",3),e.qZA(),e.qZA(),e.qZA(),e.TgZ(24,"div",20),e.TgZ(25,"h4",21),e._uU(26),e.ALo(27,"number"),e.qZA(),e.YNc(28,R,3,1,"a",22),e.qZA(),e.qZA(),e.qZA()}if(2&n){const t=s.$implicit,i=e.oxw(2);e.xp6(7),e.Oqu(t.eventName),e.xp6(1),e.Gre("badge ",i.getStatusClass(t.status),""),e.xp6(1),e.Oqu(i.getStatusDescription(t.status)),e.xp6(3),e.Oqu(t.code),e.xp6(3),e.hij("",e.xi3(16,12,t.createdAt,"dd/MM/YYYY")," "),e.xp6(3),e.hij(" ",e.xi3(19,15,t.createdAt,"HH:mm"),""),e.xp6(4),e.hij(" ",t.quantityTickets," ingresso"),e.xp6(1),e.Q6J("ngIf",t.quantityTickets>1),e.xp6(3),e.hij("R$ ",e.xi3(27,18,t.amount,"1.2-2"),""),e.xp6(2),e.Q6J("ngIf",t.link)}}function w(n,s){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"input",5),e.NdJ("keyup",function(o){return e.CHM(t),e.oxw().searchSells(o)}),e.qZA(),e.YNc(2,N,29,21,"div",6),e.BQk()}if(2&n){const t=e.oxw();e.xp6(2),e.Q6J("ngForOf",t.tickets)}}const J=function(){return{margin:0,width:"150px",height:"24px"}},E=function(){return{margin:0,width:"70px",height:"20px"}},Q=function(){return{margin:0,width:"60px",height:"18px"}},Y=function(){return{margin:0,width:"80px",height:"12px"}},G=function(){return{"margin-top":"20px",width:"110px",height:"30px"}},H=function(){return{margin:0,width:"100px",height:"30px"}};function j(n,s){1&n&&(e.TgZ(0,"div",7),e.TgZ(1,"div",9),e.TgZ(2,"div",10),e.TgZ(3,"div",11),e._UZ(4,"ngx-skeleton-loader",25),e._UZ(5,"br"),e._UZ(6,"ngx-skeleton-loader",25),e.qZA(),e.TgZ(7,"div",14),e._UZ(8,"ngx-skeleton-loader",25),e._UZ(9,"br"),e._UZ(10,"ngx-skeleton-loader",25),e._UZ(11,"br"),e._UZ(12,"ngx-skeleton-loader",25),e.qZA(),e.qZA(),e.TgZ(13,"div",20),e._UZ(14,"ngx-skeleton-loader",25),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.xp6(4),e.Q6J("theme",e.DdM(6,J)),e.xp6(2),e.Q6J("theme",e.DdM(7,E)),e.xp6(2),e.Q6J("theme",e.DdM(8,Q)),e.xp6(2),e.Q6J("theme",e.DdM(9,Y)),e.xp6(2),e.Q6J("theme",e.DdM(10,G)),e.xp6(2),e.Q6J("theme",e.DdM(11,H)))}const L=function(){return[]};function D(n,s){1&n&&(e.ynx(0),e.YNc(1,j,15,12,"div",6),e.BQk()),2&n&&(e.xp6(1),e.Q6J("ngForOf",e.DdM(1,L).constructor(6)))}function $(n,s){if(1&n&&(e.TgZ(0,"tr"),e.TgZ(1,"td",37),e.TgZ(2,"h5",42),e._uU(3),e.qZA(),e.TgZ(4,"p",42),e._uU(5),e.qZA(),e.qZA(),e.TgZ(6,"td",43),e._uU(7),e.qZA(),e.TgZ(8,"td",43),e._uU(9),e.ALo(10,"number"),e.qZA(),e.TgZ(11,"td",43),e._uU(12),e.ALo(13,"number"),e.qZA(),e.TgZ(14,"td",43),e._uU(15),e.ALo(16,"number"),e.qZA(),e.qZA()),2&n){const t=s.$implicit;e.xp6(3),e.Oqu(t.name),e.xp6(2),e.Oqu(t.sector),e.xp6(2),e.Oqu(t.qty),e.xp6(2),e.hij("R$ ",e.xi3(10,6,t.fee,"1.2-2"),""),e.xp6(3),e.hij("R$ ",e.xi3(13,9,t.price,"1.2-2"),""),e.xp6(3),e.hij("R$ ",e.xi3(16,12,(t.price+t.fee)*t.qty,"1.2-2"),"")}}function B(n,s){if(1&n&&(e.TgZ(0,"p",40),e._uU(1),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.hij("Telefone: ",(null==t.selectedOrder.tickets[0].customer?null:t.selectedOrder.tickets[0].customer.phones)[0],"")}}function z(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div",26),e.TgZ(1,"div",27),e.TgZ(2,"h5",28),e._uU(3),e.qZA(),e.TgZ(4,"p",29),e._uU(5),e.qZA(),e.qZA(),e.TgZ(6,"button",30),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return null==o.modalRef?null:o.modalRef.hide()}),e.TgZ(7,"span",31),e._uU(8,"\xd7"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(9,"div",32),e.TgZ(10,"div",33),e.TgZ(11,"table",34),e.TgZ(12,"thead"),e.TgZ(13,"tr"),e.TgZ(14,"th",35),e._uU(15,"Ingresso"),e.qZA(),e.TgZ(16,"th",36),e._uU(17,"Qtd"),e.qZA(),e.TgZ(18,"th",36),e._uU(19,"Taxa"),e.qZA(),e.TgZ(20,"th",36),e._uU(21,"Pre\xe7o"),e.qZA(),e.TgZ(22,"th",36),e._uU(23,"Total"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(24,"tbody",37),e.YNc(25,$,17,15,"tr",38),e.qZA(),e.qZA(),e.qZA(),e._UZ(26,"hr"),e.TgZ(27,"div"),e.TgZ(28,"h4",29),e._uU(29),e.qZA(),e.TgZ(30,"h5",29),e._uU(31,"Informa\xe7\xf5es do cliente:"),e.qZA(),e.YNc(32,B,2,1,"p",39),e.TgZ(33,"p",40),e._uU(34),e.qZA(),e.qZA(),e.qZA(),e.TgZ(35,"div",41),e.TgZ(36,"h3",15),e._uU(37),e.ALo(38,"number"),e.qZA(),e.qZA()}if(2&n){const t=e.oxw();e.xp6(3),e.Oqu(t.selectedOrder.eventName),e.xp6(2),e.Oqu(t.selectedOrder.code),e.xp6(20),e.Q6J("ngForOf",t.selectedOrder.tickets),e.xp6(4),e.hij("Vendido para: ",t.selectedOrder.tickets[0].customer.name,""),e.xp6(3),e.Q6J("ngIf",null!=t.selectedOrder.tickets[0].customer.phones[0]),e.xp6(2),e.hij("Email: ",t.selectedOrder.tickets[0].customer.email,""),e.xp6(3),e.hij("R$ ",e.xi3(38,7,t.selectedOrder.amount,"1.2-2"),"")}}const V=[{path:"",component:(()=>{class n{constructor(t,i,o,c){this.comissionerService=t,this.recaptchaV3Service=i,this.modalService=o,this.myProfileService=c}ngOnInit(){this.listSells(),this.getTickets()}searchSells(t){let i=t.srcElement.value.toUpperCase();this.eventName.toArray().forEach((o,c)=>{o.nativeElement.innerHTML.toUpperCase().indexOf(i)>-1?this.ticketsEve.toArray()[c].nativeElement.style.display="":this.ticketsEve.toArray()[c].nativeElement.style.display="none"})}getStatusClass(t){return"Approved"==t?"bg-success":"Canceled"==t||"GoBack"==t||"Chargeback"==t?"bg-danger":"Initial"==t?"bg-primary":"bg-warning"}getStatusDescription(t){return"Initial"==t?"N\xe3o processado":"Processing"==t?"Aguardando pagamento":"Approved"==t?"Aprovado":"Canceled"==t?"Cancelado":"Processando"}getTickets(){this.recaptchaV3Service.execute("submitSearch").subscribe(t=>{this.comissionerService.getTickets(t).subscribe(i=>{this.tickets=i,console.log(i),console.log(this.tickets),this.tickets.forEach(o=>{console.log(o)})})})}listSells(){this.recaptchaV3Service.execute("submitSearch").subscribe(t=>{this.comissionerService.getComissionHistory(t).subscribe(i=>{this.sells=i,console.log(this.sells)})})}viewTickets(t){this.selectedOrder=t,this.modalRef=this.modalService.show(this.modalTickets,{class:"modal-dialog-centered"})}cancelSell(t){}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(k),e.Y36(g.YC),e.Y36(v.tT),e.Y36(M.c))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-my-sells"]],viewQuery:function(t,i){if(1&t&&(e.Gf(U,5),e.Gf(b,5),e.Gf(F,5),e.Gf(O,5)),2&t){let o;e.iGM(o=e.CRH())&&(i.modalTickets=o.first),e.iGM(o=e.CRH())&&(i.eventName=o),e.iGM(o=e.CRH())&&(i.eventDate=o),e.iGM(o=e.CRH())&&(i.ticketsEve=o)}},decls:8,vars:2,consts:[[1,"container-fluid","mt-5"],[1,"text-center","fw-bold","text-grad"],[1,"row","mb-5"],[4,"ngIf"],["modalTickets",""],["placeholder","Buscar vendas realizadas por nome do evento",1,"form-control","mb-5","mt-5",3,"keyup"],["class","col-sm-6 col-lg-4 my-3",4,"ngFor","ngForOf"],[1,"col-sm-6","col-lg-4","my-3"],["ticketsEve",""],[1,"card"],[1,"card-body","d-flex","justify-content-between"],[1,""],[1,"text-capitalize"],["eventName",""],[1,"text-end"],[1,"text-grad","fw-bold"],[1,"date","text-muted"],["eventDate",""],[1,"btn","bg-grad","btn-sm","fw-bold","text-uppercase","m-1",3,"click"],[1,"fa","fa-ticket","me-2"],[1,"card-footer","d-flex","justify-content-between","bsell-0"],[1,"fw-bold","text-grad"],["class","text-grad h6","target","_blank",3,"href",4,"ngIf"],["target","_blank",1,"text-grad","h6",3,"href"],[1,"las","la-tag"],[3,"theme"],[1,"modal-header","border-0"],[1,"d-flex","align-items-center"],[1,"modal-title","pull-left","fw-bold","text-uppercase","m-0","me-2"],[1,"text-grad","m-0"],["type","button","aria-label","Close",1,"btn-close","close","pull-right",3,"click"],["aria-hidden","true",1,"visually-hidden"],[1,"modal-body"],[1,"table-responsive"],[1,"table"],[1,"text-grad","border-0"],[1,"text-grad","text-center","border-0"],[1,"border-0"],[4,"ngFor","ngForOf"],["class","mt-2",4,"ngIf"],[1,"mt-2"],[1,"modal-footer","border-0"],[1,"m-0"],[1,"text-center","border-0"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"h2",1),e._uU(2,"Minhas vendas"),e.qZA(),e.TgZ(3,"div",2),e.YNc(4,w,3,1,"ng-container",3),e.YNc(5,D,2,2,"ng-container",3),e.qZA(),e.qZA(),e.YNc(6,z,39,10,"ng-template",null,4,e.W1O)),2&t&&(e.xp6(4),e.Q6J("ngIf",null!=i.tickets&&0!==i.tickets.length),e.xp6(1),e.Q6J("ngIf",null==i.tickets))},directives:[d.O5,d.sg,_.xr],pipes:[d.uU,d.JJ],styles:[""]}),n})()}];let W=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[Z.Bz.forChild(V)],Z.Bz]}),n})();var T=r(3075),P=r(5003);const X={validation:!1};let K=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[{provide:g.We,useValue:f.N.recaptchaKeyV3}],imports:[[d.ez,W,T.UX,g.dw,P.yI.forRoot(X),v.zk.forRoot(),T.u5,_.hx]]}),n})()}}]);