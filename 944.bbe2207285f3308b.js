"use strict";(self.webpackChunkMeuBilhete_NewSite=self.webpackChunkMeuBilhete_NewSite||[]).push([[944],{8944:(w,u,a)=>{a.r(u),a.d(u,{WebCancellationsModule:()=>_});var r=a(9808),s=a(3287),e=a(5e3),h=a(3696),v=a(4128),Z=a(4004),c=a(520),b=a(2340),f=a(2467);let C=(()=>{class n{constructor(t,o){this.http=t,this.pdvRepository=o,this.apiUrl=b.N.apiUrl}report(t,o=!1){const i=(new c.LE).append("eventsId",t.toString());if(o){const p=(new c.WM).append("Content-Type","application/vnd.ms-excel");return this.http.get(`${this.apiUrl}/report/webCancellations/export`,{headers:p,params:i,responseType:"blob"})}return this.http.get(`${this.apiUrl}/report/webCancellations`,{params:i})}listEvents(){return(0,v.D)([this.pdvRepository.loadProducerReportEvents({active:!0}),this.pdvRepository.loadProducerReportEvents({inactive:!0})]).pipe((0,Z.U)(([t,o])=>[...t,...o]))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(c.eN),e.LFG(f.D))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var g=a(5245),m=a(4376),d=a(3075);function T(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"button",9),e.NdJ("click",function(){return e.CHM(t),e.oxw().exportXLSX()}),e.TgZ(1,"mat-icon"),e._uU(2,"file_download"),e.qZA(),e._uU(3," Exportar XLSX "),e.qZA()}}function x(n,l){if(1&n&&(e.TgZ(0,"div",18),e.TgZ(1,"div",19),e.TgZ(2,"h4",20),e._uU(3),e.qZA(),e.TgZ(4,"div",21),e.TgZ(5,"div",22),e._uU(6),e.ALo(7,"number"),e.qZA(),e.TgZ(8,"div",23),e._UZ(9,"mat-icon",24),e._uU(10),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n){const t=e.oxw(2);e.xp6(3),e.hij("",t.report.length," pedidos encontrados"),e.xp6(3),e.hij("R$ ",e.xi3(7,3,t.amountTotal(),"1.2-2"),""),e.xp6(4),e.hij(" ",t.quantityTotal()," ")}}function A(n,l){if(1&n&&(e.TgZ(0,"tr"),e.TgZ(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.ALo(11,"number"),e.qZA(),e.TgZ(12,"td",25),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA(),e.TgZ(16,"td"),e._uU(17),e.qZA(),e.qZA()),2&n){const t=l.$implicit,o=e.oxw(2);e.xp6(2),e.Oqu(t.id),e.xp6(2),e.Oqu(t.createdAt),e.xp6(2),e.Oqu(t.canceledAt),e.xp6(2),e.Oqu(t.eventName),e.xp6(2),e.hij("R$ ",e.xi3(11,8,t.amount,"1.2-2"),""),e.xp6(3),e.Oqu(t.quantity),e.xp6(2),e.Oqu(t.customerName),e.xp6(2),e.Oqu(o.formatPhones(t.phones))}}function q(n,l){1&n&&(e.TgZ(0,"tr"),e.TgZ(1,"td",26),e._uU(2,"Nenhum pedido"),e.qZA(),e.qZA())}function y(n,l){if(1&n&&(e.TgZ(0,"div",10),e.YNc(1,x,11,6,"div",11),e.TgZ(2,"div",12),e.TgZ(3,"table",13),e.TgZ(4,"thead"),e.TgZ(5,"tr"),e.TgZ(6,"th",14),e._uU(7,"ID Pedido"),e.qZA(),e.TgZ(8,"th",14),e._uU(9,"Data Pedido"),e.qZA(),e.TgZ(10,"th",14),e._uU(11,"Data Cancelamento"),e.qZA(),e.TgZ(12,"th",14),e._uU(13,"Evento"),e.qZA(),e.TgZ(14,"th",14),e._uU(15,"Valor"),e.qZA(),e.TgZ(16,"th",15),e._uU(17,"Total Bilhetes"),e.qZA(),e.TgZ(18,"th",14),e._uU(19,"Cliente"),e.qZA(),e.TgZ(20,"th",14),e._uU(21,"Telefones"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(22,"tbody"),e.YNc(23,A,18,11,"tr",16),e.YNc(24,q,3,0,"tr",17),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.report.length>0),e.xp6(22),e.Q6J("ngForOf",t.report),e.xp6(1),e.Q6J("ngIf",0==t.report.length)}}const U=[{path:"",component:(()=>{class n{constructor(t,o,i){this.toolbarService=t,this.activatedRoute=o,this.webCancellationService=i,this.events=[{id:1,name:"a"},{id:2,name:"b"},{id:3,name:"c"}],this.selecteds=[],this.eventId=""}ngOnInit(){var t;this.eventId=null!==(t=this.activatedRoute.snapshot.paramMap.get("id"))&&void 0!==t?t:"",this.toolbarService.defineNamePage("Cancelamentos Web"),this.toolbarService.defineLinkPage("web-cancellations"),this.toolbarService.defineEventId(this.eventId),this.load()}load(){this.webCancellationService.listEvents().subscribe(t=>{this.events=t.map(o=>({id:o.id,name:o.name})),this.selecteds=[this.eventId],this.loadReport()})}loadReport(){this.webCancellationService.report(this.selecteds).subscribe(t=>{this.report=t.data})}exportXLSX(){this.webCancellationService.report(this.selecteds,!0).subscribe({next:t=>{const o=URL.createObjectURL(t),i=document.createElement("a");i.href=o,i.download="web-cancellations.xls",document.body.appendChild(i),i.click(),document.body.removeChild(i)}})}formatPhones(t){return JSON.parse(t).join(",\n")}amountTotal(){var t;return null===(t=this.report)||void 0===t?void 0:t.reduce((o,i)=>o+Number(i.amount),0)}quantityTotal(){var t;return null===(t=this.report)||void 0===t?void 0:t.reduce((o,i)=>o+Number(i.quantity),0)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(h.O),e.Y36(s.gz),e.Y36(C))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-web-cancellations"]],decls:10,vars:5,consts:[[1,"row","p-5"],[1,"col-md-12"],[1,"card","py-3"],[1,"card-header","bg-white","border-0"],[1,"d-flex","justify-content-between","align-items-center","mb-3"],[1,"card-title"],["class","btn btn-success btn-lg btn-excel",3,"click",4,"ngIf"],["bindLabel","name","bindValue","id",3,"items","ngModel","multiple","ngModelChange","change"],["class","card-body",4,"ngIf"],[1,"btn","btn-success","btn-lg","btn-excel",3,"click"],[1,"card-body"],["class","card mb-5",4,"ngIf"],[1,"table-responsive"],[1,"table","table-borderless","table-striped"],["scope","col"],["scope","col",1,"text-center"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"card","mb-5"],[1,"card-body","d-flex","align-items-center"],[1,"w-50","m-0"],[1,"report-total","w-50"],[1,"report-total-amount"],[1,"report-total-quantity"],["svgIcon","ingressosa"],[1,"text-center"],["colspan","8",1,"text-center"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"h4",5),e._uU(6,"Cancelamentos Web"),e.qZA(),e.YNc(7,T,4,0,"button",6),e.qZA(),e.TgZ(8,"ng-select",7),e.NdJ("ngModelChange",function(p){return o.selecteds=p})("change",function(){return o.loadReport()}),e.qZA(),e.qZA(),e.YNc(9,y,25,3,"div",8),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(7),e.Q6J("ngIf",o.report&&o.report.length>0),e.xp6(1),e.Q6J("items",o.events)("ngModel",o.selecteds)("multiple",!0),e.xp6(1),e.Q6J("ngIf",o.report))},directives:[r.O5,g.Hw,m.w9,d.JJ,d.On,r.sg],pipes:[r.JJ],styles:[".btn-excel[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.report-total[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:end;text-align:end;gap:10px}.report-total-quantity[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-size:1.5rem;font-weight:500;line-height:1.5rem;color:#425bff}.report-total-amount[_ngcontent-%COMP%]{font-size:2rem;font-weight:500;line-height:2rem;color:#5a5d6d;text-transform:capitalize;width:100%}"]}),n})()}];let W=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[s.Bz.forChild(U)],s.Bz]}),n})(),_=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[r.ez,W,m.A0,d.u5,g.Ps]]}),n})()}}]);