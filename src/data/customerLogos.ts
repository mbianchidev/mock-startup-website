import type { StaticImageData } from 'next/image'
import abl from '@/assets/customer-logos/abl.png'
import allianz from '@/assets/customer-logos/all.png'
import barilla from '@/assets/customer-logos/bar.png'
import bmw from '@/assets/customer-logos/bmw.png'
import dShare from '@/assets/customer-logos/dshr.png'
import ecoMind from '@/assets/customer-logos/eco.png'
import redHat from '@/assets/customer-logos/ext_rdht.png'
import syncTune from '@/assets/customer-logos/free.png'
import frontex from '@/assets/customer-logos/frx.png'
import enel from '@/assets/customer-logos/gas.png'
import gdf from '@/assets/customer-logos/gdf.png'
import generali from '@/assets/customer-logos/gen.png'
import github from '@/assets/customer-logos/ghb.png'
import infocert from '@/assets/customer-logos/ice.png'
import kubeLab from '@/assets/customer-logos/klb.png'
import leonardo from '@/assets/customer-logos/leo.png'
import mentorCruise from '@/assets/customer-logos/mntcrs.png'
import mvcTechnology from '@/assets/customer-logos/mvctch.png'
import nki from '@/assets/customer-logos/nki.png'
import omnistrate from '@/assets/customer-logos/omn.png'
import roar from '@/assets/customer-logos/roar.png'
import reply from '@/assets/customer-logos/rpl.png'
import replyPower from '@/assets/customer-logos/rpp.png'
import tenutabene from '@/assets/customer-logos/ten.png'
import unicredit from '@/assets/customer-logos/unc.png'
import various from '@/assets/customer-logos/var.png'
import vodafone from '@/assets/customer-logos/vod.png'
import zefi from '@/assets/customer-logos/zef.png'

export const customerLogos: Record<string, StaticImageData> = {
  ABL: abl,
  ALL: allianz,
  BAR: barilla,
  BMW: bmw,
  DSHR: dShare,
  ECO: ecoMind,
  EXT_RDHT: redHat,
  FREE: syncTune,
  FRX: frontex,
  GAS: enel,
  GDF: gdf,
  GEN: generali,
  GHB: github,
  ICE: infocert,
  KLB: kubeLab,
  LEO: leonardo,
  MNTCRS: mentorCruise,
  MVCTCH: mvcTechnology,
  NKI: nki,
  OMN: omnistrate,
  ROAR: roar,
  RPL: reply,
  RPP: replyPower,
  TEN: tenutabene,
  UNC: unicredit,
  VAR: various,
  VOD: vodafone,
  ZEF: zefi,
}
