import styles from './passenger.module.css';

export const Passenger = () => {
    return (
        <div className={styles.main_container}>
            <div>
                <i class="fl icon icon-right back-arrow" id={styles.backarw} title="Back"></i>
                <h4 className={styles.heading}>Passenger Detail</h4>
            </div>
            <div className={styles.container}>
                <div>
                    <div>
                        <div className={styles.headingdet}>
                            <i class="icon-profileIcon fl"></i>
                            <span className={styles.title}>Passenger Information</span>
                        </div>
                        <div className={styles.pasdet}>
                            <div>
                                <div className={styles.detail1}>
                                    <div className={styles.passeat}>
                                        <span className={styles.pass1}>Passenger 1</span>
                                        <span className={styles.seats}>Seat D</span>
                                    </div>
                                    <div>
                                        <div className={styles.namediv}>
                                            <div>
                                                <label className={styles.namelbl}>Name
                                                    <input className={styles.inpblock} type="text" placeholder='name' value='Name' />
                                                </label>
                                            </div>
                                        </div>
                                        <div className={styles.agendiv}>
                                            <div className={styles.gendiv}>
                                                <div style={{ marginBottom: '0.8em' }}>
                                                    <div>
                                                        <span>Gender</span>
                                                        <div style={{ marginTop: '0.6em', textAlign: 'center' }}>
                                                            <span>
                                                                <div style={{position:'relative'}}>
                                                                    <div className={styles.male}></div>
                                                                    <input type="radio" name="gendermale" value='male' className={styles.malebx}/>
                                                                    <label className={styles.malelabel}>Male</label>
                                                                </div>
                                                            </span>
                                                            <span>
                                                                <div style={{float:'left', position:'relative'}}>
                                                                    <div className={styles.female}></div>
                                                                    <input type="radio" name="genderfemale" value='female' className={styles.femalebx} />
                                                                    <label className={styles.malelabel}></label>
                                                                </div>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.agediv}>
                                                <div style={{width:'100%', marginBottom:'0.8em'}}>
                                                    <div>
                                                        <label>Age
                                                            <input type="text" name='age' value='age'  className={styles.inpblock} /> 
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}