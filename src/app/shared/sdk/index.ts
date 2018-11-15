/* tslint:disable */
/**
* @module SDKModule
* @author Jonathan Casarrubias <t:@johncasarrubias> <gh:jonathan-casarrubias>
* @license MIT 2016 Jonathan Casarrubias
* @version 2.1.0
* @description
* The SDKModule is a generated Software Development Kit automatically built by
* the LoopBack SDK Builder open source module.
*
* The SDKModule provides Angular 2 >= RC.5 support, which means that NgModules
* can import this Software Development Kit as follows:
*
*
* APP Route Module Context
* ============================================================================
* import { NgModule }       from '@angular/core';
* import { BrowserModule }  from '@angular/platform-browser';
* // App Root 
* import { AppComponent }   from './app.component';
* // Feature Modules
* import { SDK[Browser|Node|Native]Module } from './shared/sdk/sdk.module';
* // Import Routing
* import { routing }        from './app.routing';
* @NgModule({
*  imports: [
*    BrowserModule,
*    routing,
*    SDK[Browser|Node|Native]Module.forRoot()
*  ],
*  declarations: [ AppComponent ],
*  bootstrap:    [ AppComponent ]
* })
* export class AppModule { }
*
**/
import { ErrorHandler } from './services/core/error.service';
import { LoopBackAuth } from './services/core/auth.service';
import { LoggerService } from './services/custom/logger.service';
import { SDKModels } from './services/custom/SDKModels';
import { InternalStorage, SDKStorage } from './storage/storage.swaps';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CookieBrowser } from './storage/cookie.browser';
import { StorageBrowser } from './storage/storage.browser';
import { SocketBrowser } from './sockets/socket.browser';
import { SocketDriver } from './sockets/socket.driver';
import { SocketConnection } from './sockets/socket.connections';
import { RealTime } from './services/core/real.time';
import { UserApi } from './services/custom/User';
import { EmailApi } from './services/custom/Email';
import { ApplicantApi } from './services/custom/Applicant';
import { RiskApi } from './services/custom/Risk';
import { EstimateRequestApi } from './services/custom/EstimateRequest';
import { PaymentTypeApi } from './services/custom/PaymentType';
import { PictureApi } from './services/custom/Picture';
import { ClientApi } from './services/custom/Client';
import { InsuranceAgentApi } from './services/custom/InsuranceAgent';
import { EstimateApi } from './services/custom/Estimate';
import { PolicyRequestApi } from './services/custom/PolicyRequest';
import { VehicleDataApi } from './services/custom/VehicleData';
import { PolicyApi } from './services/custom/Policy';
import { CoverageApi } from './services/custom/Coverage';
import { CardProviderApi } from './services/custom/CardProvider';
import { BankAccountTypeApi } from './services/custom/BankAccountType';
import { DocumentTypeApi } from './services/custom/DocumentType';
import { GenderApi } from './services/custom/Gender';
import { CertificationEventApi } from './services/custom/CertificationEvent';
import { InsuranceCompanyApi } from './services/custom/InsuranceCompany';
import { ExpirableDocumentApi } from './services/custom/ExpirableDocument';
import { DashboardLightApi } from './services/custom/DashboardLight';
import { GasPriceApi } from './services/custom/GasPrice';
import { CarServiceApi } from './services/custom/CarService';
import { InvoicePictureApi } from './services/custom/InvoicePicture';
import { OilChangeServiceApi } from './services/custom/OilChangeService';
import { OtherServiceApi } from './services/custom/OtherService';
/**
* @module SDKBrowserModule
* @description
* This module should be imported when building a Web Application in the following scenarios:
*
*  1.- Regular web application
*  2.- Angular universal application (Browser Portion)
*  3.- Progressive applications (Angular Mobile, Ionic, WebViews, etc)
**/
@NgModule({
  imports:      [ CommonModule, HttpClientModule ],
  declarations: [ ],
  exports:      [ ],
  providers:    [
    ErrorHandler,
    SocketConnection
  ]
})
export class SDKBrowserModule {
  static forRoot(internalStorageProvider: any = {
    provide: InternalStorage,
    useClass: CookieBrowser
  }): ModuleWithProviders {
    return {
      ngModule  : SDKBrowserModule,
      providers : [
        LoopBackAuth,
        LoggerService,
        SDKModels,
        RealTime,
        UserApi,
        EmailApi,
        ApplicantApi,
        RiskApi,
        EstimateRequestApi,
        PaymentTypeApi,
        PictureApi,
        ClientApi,
        InsuranceAgentApi,
        EstimateApi,
        PolicyRequestApi,
        VehicleDataApi,
        PolicyApi,
        CoverageApi,
        CardProviderApi,
        BankAccountTypeApi,
        DocumentTypeApi,
        GenderApi,
        CertificationEventApi,
        InsuranceCompanyApi,
        ExpirableDocumentApi,
        DashboardLightApi,
        GasPriceApi,
        CarServiceApi,
        InvoicePictureApi,
        OilChangeServiceApi,
        OtherServiceApi,
        internalStorageProvider,
        { provide: SDKStorage, useClass: StorageBrowser },
        { provide: SocketDriver, useClass: SocketBrowser }
      ]
    };
  }
}
/**
* Have Fun!!!
* - Jon
**/
export * from './models/index';
export * from './services/index';
export * from './lb.config';
export * from './storage/storage.swaps';
export { CookieBrowser } from './storage/cookie.browser';
export { StorageBrowser } from './storage/storage.browser';

