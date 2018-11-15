/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Email } from '../../models/Email';
import { Applicant } from '../../models/Applicant';
import { Risk } from '../../models/Risk';
import { EstimateRequest } from '../../models/EstimateRequest';
import { PaymentType } from '../../models/PaymentType';
import { Picture } from '../../models/Picture';
import { Client } from '../../models/Client';
import { InsuranceAgent } from '../../models/InsuranceAgent';
import { Estimate } from '../../models/Estimate';
import { PolicyRequest } from '../../models/PolicyRequest';
import { VehicleData } from '../../models/VehicleData';
import { Policy } from '../../models/Policy';
import { Coverage } from '../../models/Coverage';
import { CardProvider } from '../../models/CardProvider';
import { BankAccountType } from '../../models/BankAccountType';
import { DocumentType } from '../../models/DocumentType';
import { Gender } from '../../models/Gender';
import { CertificationEvent } from '../../models/CertificationEvent';
import { InsuranceCompany } from '../../models/InsuranceCompany';
import { ExpirableDocument } from '../../models/ExpirableDocument';
import { DashboardLight } from '../../models/DashboardLight';
import { GasPrice } from '../../models/GasPrice';
import { CarService } from '../../models/CarService';
import { InvoicePicture } from '../../models/InvoicePicture';
import { OilChangeService } from '../../models/OilChangeService';
import { OtherService } from '../../models/OtherService';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Email: Email,
    Applicant: Applicant,
    Risk: Risk,
    EstimateRequest: EstimateRequest,
    PaymentType: PaymentType,
    Picture: Picture,
    Client: Client,
    InsuranceAgent: InsuranceAgent,
    Estimate: Estimate,
    PolicyRequest: PolicyRequest,
    VehicleData: VehicleData,
    Policy: Policy,
    Coverage: Coverage,
    CardProvider: CardProvider,
    BankAccountType: BankAccountType,
    DocumentType: DocumentType,
    Gender: Gender,
    CertificationEvent: CertificationEvent,
    InsuranceCompany: InsuranceCompany,
    ExpirableDocument: ExpirableDocument,
    DashboardLight: DashboardLight,
    GasPrice: GasPrice,
    CarService: CarService,
    InvoicePicture: InvoicePicture,
    OilChangeService: OilChangeService,
    OtherService: OtherService,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
