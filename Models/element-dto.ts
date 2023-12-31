export interface Element_dto {
    type: string;
    name: string;
    // @ts-ignore
    attributes: Attribute_dto[],
    elements?: Element_dto[],
}


export interface Attribute_dto  {
    chkid?: string;
    title?: string;
    workid?: string;
    iswc?: string;
    datereg?: string;
    regtype?: string;
    awards?: string;
    part_name?: string;
    pwa_ind?: string;
    soc_id?: string;
    tpj_share_us?: string;
    part_cae_no?: string;
    flag?: string;
    count?: string;
    loggedin?: string;
    url?: string;
    elements?: Element_dto[],
    xmlns?: string;
    error?: string;
}