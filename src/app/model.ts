// Generated using typescript-generator version 1.25.322 on 2018-09-10 14:43:38.

export interface Tour extends BasicFields {
    id: number;
    traveller: Traveller;
    destination: string;
    experience: string;
    rating: number;
}

export interface Traveller extends BasicFields {
    id: number;
    tours: Tour[];
    nick: string;
    age: number;
}

export interface Calendar extends Serializable, Cloneable, Comparable<Calendar> {
}

export interface BasicFields extends Serializable {
    deleted: boolean;
    createdOn: Calendar;
    updatedOn: Calendar;
    deletedOn: Calendar;
}

export interface Serializable {
}

export interface Cloneable {
}

export interface Comparable<T> {
}
